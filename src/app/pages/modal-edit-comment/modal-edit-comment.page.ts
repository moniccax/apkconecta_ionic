import { Component, OnInit,Input } from '@angular/core';
import { Storage } from '@ionic/storage';
import { FormsubmitService } from './../../services/formsubmit.service';
import { ModalController } from '@ionic/angular';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-modal-edit-comment',
  templateUrl: './modal-edit-comment.page.html',
  styleUrls: ['./modal-edit-comment.page.scss'],
})
export class ModalEditCommentPage implements OnInit {
	@Input() commentId: any;
	comment : any;
	editCommentForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
							private storage: Storage,
							private formService: FormsubmitService,
							private modalController: ModalController,
							private loadingController : LoadingController,
							private toastController: ToastController)
							{
								this.editCommentForm = this.formBuilder.group({
						      comment_text: new FormControl(Validators.compose([Validators.required]))
						    });
							}

  ngOnInit() {
		this.showComment();
  }

	async presentToast(message, color){
		const toast = await this.toastController.create({
			message: message,
			duration: 2000,
			color: color
		});
		toast.present();
	}

	showComment(){
		this.storage.get('token').then(token => {
      if (token) {
        const data = {'token': token };
        this.formService.postSubmit('https://api.fundacaocefetminas.org.br/getComment/'+this.commentId, data).subscribe(
          res => {
            if (res['success']) {
              this.comment = res['comment'];
            }
          },
          err => {

          }
        );
      }
    });
	}

	async submitEditComment() {
		const loading = await this.loadingController.create({
				message: 'Atualizando...',
		});
		await loading.present();
		this.storage.get('token').then(token => {
			if (token) {
				const data = {'token': token, 'comment': this.editCommentForm.getRawValue().comment_text};
				this.formService.postSubmit('https://api.fundacaocefetminas.org.br/updateComment/'+this.commentId, data).subscribe(
					res => {
						if (res['success']) {
							loading.dismiss();
							this.presentToast(res['message'],'success');
							this.editCommentForm.reset();
							this.closeModal();
						}
						else{
							loading.dismiss();
							this.closeModal();
							this.presentToast(res['message'],'danger');
						}
					},
					err => {
						loading.dismiss();
						this.closeModal();
						this.presentToast("Erro ao enviar o comentário!",'danger');
					}
				);
			}
		});
	}

	closeModal() {
    this.modalController.dismiss();
  }
}
