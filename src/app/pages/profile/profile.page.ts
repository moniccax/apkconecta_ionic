import { Component, OnInit } from '@angular/core';
import { Crop } from '@ionic-native/crop/ngx';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { Storage } from '@ionic/storage';
import { File, FileEntry } from '@ionic-native/file/ngx';
import { ToastController, LoadingController } from '@ionic/angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ChangeDetectorRef } from '@angular/core'
import { AuthenticationService } from './../../services/authentication.service';
import { FormsubmitService } from './../../services/formsubmit.service';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.page.html',
	styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
	fileUrl: any = null;
	respData: any;
	load: boolean;
	profile: {
		profilepicpath: any,
		name: any,
		cpf: any,
		email: any
	};

	editProfileForm: FormGroup;

	changePassword: FormGroup;

	error_messages = {
		'cpf': [
			{ type: 'required', message: 'CPF é necessário.' },
			{ type: 'minlength', message: 'CPF inválido.' }
		],
		'nome': [
			{ type: 'required', message: 'Nome é necessário.' }
		],
		'email': [
			{ type: 'required', message: 'Email é necessário.' }
		],
		'password': [
			{ type: 'required', message: 'Senha é necessário.' },
		],
		'newPassword': [
			{ type: 'required', message: 'Nova senha é necessário.' }
		],
		'confirmNewPassword': [
			{ type: 'required', message: 'Confirmação da nova senha é necessário.' }
		],
	}

	checkPasswords(group: FormGroup) { // here we have the 'passwords' group
		let pass = group.controls.newPassword.value;
		let confirmPass = group.controls.confirmNewPassword.value;
		return pass === confirmPass ? null : { notSame: true };
	}

	constructor(private imagePicker: ImagePicker,
	private formBuilder: FormBuilder,
  private crop: Crop,
  private transfer: FileTransfer,
	private storage:Storage,
	private file: File,
	private toastController: ToastController,
	private loadingController: LoadingController,
	private http: Http,
	private changeRef: ChangeDetectorRef,
	private authService: AuthenticationService,
	private formService: FormsubmitService) {
		this.load = false;
		this.editProfileForm = this.formBuilder.group({
			cpf: new FormControl({ value: '', disabled: true }, Validators.compose([Validators.required, Validators.minLength(14)])),
			name: new FormControl({ value: '', disabled: true }, Validators.compose([Validators.required])),
			email: new FormControl('', Validators.compose([Validators.required]))
		});

		this.changePassword = this.formBuilder.group({
			password: new FormControl('', Validators.compose([Validators.required])),
			newPassword: new FormControl('', Validators.compose([Validators.required])),
			confirmNewPassword: new FormControl('', Validators.compose([Validators.required]))
		}, { validator: this.checkPasswords });
	}

	ngOnInit() {
	}

	ionViewWillEnter() {
		this.profile = {
			profilepicpath: "",
			name: "",
			cpf: "",
			email: ""
		};
		this.updateProfileInfo();
	}

	async presentToast(message,color) {
		const toast = await this.toastController.create({
			message: message,
			duration: 2000,
			color: color
		});
		toast.present();
	}

	submitEditProfile(){
		let data ={'cpf': this.editProfileForm.getRawValue().cpf, 'name': this.editProfileForm.getRawValue().name, 'email': this.editProfileForm.value.email};
		console.log(data);
	}

	submitChangePassword(){
		let data=this.changePassword.value;
		this.storage.get('token').then((val) => {
			data.token= val;
			console.log(data);
			this.formService.postSubmit('https://api.fundacaocefetminas.org.br/updatePassword',data).subscribe(
				data => {
					if(data['success']==true){
						this.storage.set('password', this.changePassword.value.newPassword);
						this.presentToast(data['message'],"success");
					}
					else{
						this.presentToast(data['message'],"danger");
					}
				},
				error =>{
					this.presentToast(error.message,"danger");
				}
			);
		});
	}

	cropUpload() {
		this.imagePicker.getPictures({ maximumImagesCount: 1, outputType: 0 }).then((results) => {
			for (let i = 0; i < results.length; i++) {
				console.log('Image URI: ' + results[i]);
				this.crop.crop(results[i], { quality: 100 })
					.then(
						newImage => {
							console.log('new image path is: ' + newImage);
							this.startUpload(newImage);
						},
						error => console.error('Error cropping image', error)
					);
			}
		}, (err) => { console.log(err); });
	}

	startUpload(imgEntry) {
    this.file.resolveLocalFilesystemUrl(imgEntry)
        .then(entry => {
            ( < FileEntry > entry).file(file => this.readFile(file))
        })
        .catch(err => {
            this.presentToast('Error while reading file.', 'danger');
        });
	}

	readFile(file: any) {
		const reader = new FileReader();
		reader.onloadend = () => {
			const formData = new FormData();
			const imgBlob = new Blob([reader.result], {
				type: file.type
			});
			this.storage.get('token').then((val) => {
				formData.append('file', imgBlob, "profile.png");
				formData.append('token', val);
				this.uploadImageData(formData);
			});
		};
		reader.readAsArrayBuffer(file);
	}

	async uploadImageData(formData: FormData) {
		const loading = await this.loadingController.create({
			message: 'Uploading image...',
		});
		await loading.present();

		this.formService.imageSubmit('https://api.fundacaocefetminas.org.br/updateProfilePic', formData)
		.subscribe( data => {
			loading.dismiss();
			console.log('API Response : ', data);
			if(data['success']){
				this.presentToast('Foto de perfil atualizada com sucesso','success')
				this.updateProfileInfo();
			}
			else{
				this.presentToast('Falha no servidor ao atualizar a foto de perfil.','danger')
			}
		}, error=>{
			loading.dismiss();
			console.error('API Error : ', error);
			this.presentToast('Falha ao atualizar a foto de perfil','danger')
		});

		/*this.http.post("https://api.fundacaocefetminas.org.br/updateProfilePic", formData)
			.toPromise()
			.then((response) => {
				loading.dismiss();
				console.log('API Response : ', response.json());
				if(response.json().success){
					this.presentToast('File upload complete.','success')
					this.updateProfileInfo();
				}
				else{
					this.presentToast('File upload failed on server.','danger')
				}
			})
			.catch((error) => {
				loading.dismiss();
				console.error('API Error : ', error.status);
				console.error('API Error : ', JSON.stringify(error));
				this.presentToast('File upload failed.','danger')
			});*/
	}
	updateProfileInfo(){
		this.storage.get('token').then(token => {
			if (token) {
				let data = { 'token': token };
				this.formService.postSubmit('https://api.fundacaocefetminas.org.br/getProfileInfo', data)
				.subscribe( data => {
					this.updateScreen(data);
		    });
			}
		});
	}

	updateScreen(data){
		this.profile.name=data.name;
		this.editProfileForm.controls['name'].setValue(this.profile.name);
		this.profile.cpf=data.cpf;
		this.editProfileForm.controls['cpf'].setValue(this.profile.cpf);
		this.profile.email=data.email;
		this.editProfileForm.controls['email'].setValue(this.profile.email);
		this.profile.profilepicpath=data.profilepicpath+"?"+new Date().getTime();
		this.load=true;
		this.changeRef.detectChanges();
	}
}
