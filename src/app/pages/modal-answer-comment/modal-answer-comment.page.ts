import { Component, OnInit, Input } from '@angular/core';
import { Storage } from '@ionic/storage';
import { FormsubmitService } from './../../services/formsubmit.service';
import { ModalController } from '@ionic/angular';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-modal-answer-comment',
  templateUrl: './modal-answer-comment.page.html',
  styleUrls: ['./modal-answer-comment.page.scss'],
})
export class ModalAnswerCommentPage implements OnInit {

	@Input() commentId: any;
	comment : any;
	answerCommentForm: FormGroup;
	new_comment: {
			profilepicpath: any,
			name: any,
			date: any
	};
  constructor(private formBuilder: FormBuilder,
							private storage: Storage,
							private formService: FormsubmitService,
							private modalController: ModalController,
							private loadingController : LoadingController,
							private toastController: ToastController)
							{
								this.answerCommentForm = this.formBuilder.group({
						      comment_text: new FormControl('',Validators.compose([Validators.required]))
						    });
							}
	ionViewWillEnter(){
		this.new_comment = {
			profilepicpath: "",
			name: "",
			date: ""
		};
	}

  ngOnInit() {
		this.showComment();
		this.updateCommentInfo();
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

	updateCommentInfo(){
		this.storage.get('token').then(token => {
			if (token) {
				let data = { 'token': token };
				this.formService.postSubmit('https://api.fundacaocefetminas.org.br/getProfileInfo', data)
				.subscribe( data => {
					this.updateNewComment(data);
		    });
			}
		});
	}

	updateNewComment(data){
		this.new_comment.name=data.name;
		this.new_comment.profilepicpath=data.profilepicpath+"?"+new Date().getTime();
		this.new_comment.date = new Date().toDateString();
	}

	async submitAnswerComment() {
		const loading = await this.loadingController.create({
				message: 'Atualizando...',
		});
		await loading.present();
		this.storage.get('token').then(token => {
			if (token) {
				const data = {'token': token, 'comment': this.answerCommentForm.getRawValue().comment_text};
				this.formService.postSubmit('https://api.fundacaocefetminas.org.br/answerComment/'+this.commentId, data).subscribe(
					res => {
						if (res['success']) {
							loading.dismiss();
							this.presentToast(res['message'],'success');
							this.answerCommentForm.reset();
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
