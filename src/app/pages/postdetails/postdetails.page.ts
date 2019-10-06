import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { FormsubmitService } from './../../services/formsubmit.service';
import { AuthenticationService } from './../../services/authentication.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { ModalEditCommentPage } from '../modal-edit-comment/modal-edit-comment.page';
import { ModalAnswerCommentPage } from '../modal-answer-comment/modal-answer-comment.page';
@Component({
  selector: 'app-postdetails',
  templateUrl: './postdetails.page.html',
  styleUrls: ['./postdetails.page.scss'],
})
export class PostdetailsPage implements OnInit {
	addCommentForm: FormGroup;
	constructor(private formBuilder: FormBuilder,
							private sanitizer: DomSanitizer,
							private alertController: AlertController,
							private activatedRoute: ActivatedRoute,
							private toastController: ToastController,
							private storage: Storage,
							private formService: FormsubmitService,
							private authService: AuthenticationService,
							private loadingController: LoadingController,
							private modalController: ModalController)
	{
		this.addCommentForm = this.formBuilder.group({
      comment_text: new FormControl('',Validators.compose([Validators.required])),
    });
  }

	id: any;
	post: any;
	comments: any;
	editing_comments: any;
	isHidden: any;

  ngOnInit() {
		this.id = this.activatedRoute.snapshot.paramMap.get('id');
		this.showPost();
  }

	showPost() {
    this.storage.get('token').then(token => {
      if (token) {
        const data = {'token': token };
        this.formService.postSubmit('https://api.fundacaocefetminas.org.br/getPost/'+this.id, data).subscribe(
          res => {
            if (res['success']) {
              this.post = res['post'];
							this.showComments(this.post.comments);
            }
          },
          err => {

          }
        );
      }
    });
  }

	showComments(comments_array){
		let temp="";
		let temp_map= new Map()
		comments_array.forEach((value) => {
			temp+=this.buildComment(value);
			temp_map.set(value.id,true);
		});
		this.isHidden=true;
		console.log(temp_map);
		this.editing_comments=temp_map;
		this.comments= this.sanitizer.bypassSecurityTrustHtml(temp);
	}

	buildComment(comment){
		let temp="";
		temp+=`<ion-card>
			<ion-card-header class="ion-no-padding">
				<ion-item lines="none">
					<ion-avatar slot="start">
						<ion-img src="https://api.fundacaocefetminas.org.br`+comment.author_profilepic+`"></ion-img>
					</ion-avatar>
					<ion-label>
						<p>`+comment.author+`</p>
						<p>
							<ion-datetime class="post-date" display-format="DD/MM/YYYY HH:mm" value="`+comment.date+`">
							</ion-datetime>
						</p>
					</ion-label>`;
					if(comment.editable){
						console.log("editable")
						temp+=`<div slot="end">
						<ion-button id="answerComment_`+comment.id+`">
							<ion-icon name="chatboxes"></ion-icon>
						</ion-button>
						<ion-button id="editComment_`+comment.id+`">
							<ion-icon name="create"></ion-icon>
						</ion-button>
						<ion-button id="deleteComment_`+comment.id+`">
							<ion-icon name="trash"></ion-icon>
						</ion-button>
						</div>`;
					}
					temp+=`</ion-item>
					</ion-card-header>
					<ion-card-content>
					<div id="commentContent_`+comment.id+`" *ngIf="isHidden">
					`+comment.text.replace("\n","<br>")+`
					</div>
					</ion-card-content>`;
		comment.children.forEach((value) => {
			temp+=this.buildComment(value);
		});
		temp+=`</ion-card>`;
		return temp;
	}

	async presentToast(message, color){
		const toast = await this.toastController.create({
			message: message,
			duration: 2000,
			color: color
		});
		toast.present();
	}

	async submitAddComment() {
		const loading = await this.loadingController.create({
				message: 'Enviando...',
		});
		await loading.present();
		this.storage.get('token').then(token => {
			if (token) {
				const data = {'token': token, 'comment': this.addCommentForm.getRawValue().comment_text};
				this.formService.postSubmit('https://api.fundacaocefetminas.org.br/addComment/'+this.id, data).subscribe(
					res => {
						if (res['success']) {
							loading.dismiss();
							this.presentToast(res['message'],'success');
							this.showPost();
							this.addCommentForm.reset();
						}
						else{
							loading.dismiss();
							this.presentToast(res['message'],'danger');
						}
					},
					err => {
						loading.dismiss();
						this.presentToast("Erro ao enviar o comentário!",'danger');
					}
				);
			}
		});
	}


	async presentConfirmDeleteComment(comment_id) {
		const loading = await this.loadingController.create({
				message: 'Removendo...',
		});
		let alert_buttons = [
			{
				text: 'Cancelar',
				role: 'cancel',
				cssClass: 'secondary'
			}, {
				text: 'Sim',
				handler: () => {
					console.log('Delete comment '+comment_id);
					this.storage.get('token').then(token => {
						if (token) {
							const data = {'token': token};
							this.formService.postSubmit('https://api.fundacaocefetminas.org.br/deleteComment/'+comment_id, data).subscribe(
								res => {
									if (res['success']) {
										loading.dismiss();
										this.presentToast(res['message'],'success');
										this.showPost();
									}
									else{
										loading.dismiss();
										this.presentToast(res['message'],'danger');
									}
								},
								err => {
									loading.dismiss();
									this.presentToast("Erro ao enviar o comentário!",'danger');
								}
							);
						}
					});
				}
			}
		];
		const alert = await this.alertController.create({
			header: 'Deseja realmente excluir este comentário?',
			buttons: alert_buttons
		});
		await alert.present();
	}

	deleteComment(id){
		console.log("deleting "+id);
		this.presentConfirmDeleteComment(id);
	}

	editComment(id){
		//console.log("edit "+ id);
		this.presentEditModal(id);
	}

	async presentEditModal(id) {
    const modal = await this.modalController.create({
      component: ModalEditCommentPage,
			componentProps: {
				'commentId': id
			},
    });
		modal.onDidDismiss().then(() => {
       this.showPost();
    });
    return await modal.present();
  }

	answerComment(id){
		//console.log("answer "+ id)
		this.presentAnswerModal(id);
	}

	async presentAnswerModal(id) {
    const modal = await this.modalController.create({
      component: ModalAnswerCommentPage,
			componentProps: {
				'commentId': id
			},
    });
		modal.onDidDismiss().then(() => {
       this.showPost();
    });
    return await modal.present();
  }

	handleClick(event){
		let button_clicked=event.target.id.split("_");
		let call=button_clicked[0];
		let comment_id=button_clicked[1];
		if(call=="editComment"){
			this.editComment(comment_id);
		}
		if(call=="deleteComment"){
			this.deleteComment(comment_id);
		}
		if(call=="answerComment"){
			this.answerComment(comment_id);
		}
	}
}
