import { Component, OnInit } from '@angular/core';
import { Crop } from '@ionic-native/crop/ngx';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { Storage } from '@ionic/storage';
import { File, FileEntry } from '@ionic-native/file/ngx';
import { ToastController,LoadingController } from '@ionic/angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import {FormBuilder, FormGroup, FormControl,Validators} from '@angular/forms';
import { ChangeDetectorRef } from '@angular/core'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
	fileUrl: any = null;
	respData: any;
	load: boolean;
	profile :{
		profilepicpath: any,
		name: any,
		cpf: any,
		email: any
	};

	editProfileForm: FormGroup;

	error_messages = {
		'cpf':[
			{type:'required',message:'CPF é necessário.'},
			{type:'minlength',message:'CPF inválido.'}
		],
		'nome':[
			{type:'required',message:'Nome é necessário.'}
		],
		'email':[
			{type:'required',message:'Email é necessário.'}
		],
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
	private changeRef: ChangeDetectorRef) {
		this.load = false;
		this.editProfileForm = this.formBuilder.group({
			cpf:new FormControl({value: '', disabled: true},Validators.compose([Validators.required,Validators.minLength(14)])),
			name:new FormControl({value: '', disabled: true},Validators.compose([Validators.required])),
			email:new FormControl('',Validators.compose([Validators.required]))
		});
	}

  ngOnInit() {
  }

	ionViewWillEnter() {
		this.profile={
			profilepicpath:"",
			name:"",
			cpf:"",
			email:""
		};
		this.updateProfilePic();
	}

	submitEditProfile(){
		let data ={'cpf': this.editProfileForm.value.cpf, 'name': this.editProfileForm.value.name, 'email': this.editProfileForm.value.email};
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

	async presentToast(text) {
		const toast = await this.toastController.create({
				message: text,
				position: 'bottom',
				duration: 3000
		});
		toast.present();
	}

	startUpload(imgEntry) {
	    this.file.resolveLocalFilesystemUrl(imgEntry)
	        .then(entry => {
	            ( < FileEntry > entry).file(file => this.readFile(file))
	        })
	        .catch(err => {
	            this.presentToast('Error while reading file.');
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

	    this.http.post("https://api.fundacaocefetminas.org.br/updateProfilePic", formData)
			.toPromise()
			.then((response) =>
			{
				loading.dismiss();
				console.log('API Response : ', response.json());
				if(response.json().success){
					this.presentToast('File upload complete.')
					this.updateProfilePic();
				}
				else{
					this.presentToast('File upload failed on server.')
				}
			})
			.catch((error) =>
			{
				loading.dismiss();
				console.error('API Error : ', error.status);
				console.error('API Error : ', JSON.stringify(error));
				this.presentToast('File upload failed.')
			});
	}

	updateProfilePic(){
		this.storage.get('token').then(token => {
			if(token){
				let data ={'token': token};
				console.log(data)
				let headers = new Headers(
				{
					'Content-Type' : 'application/json'
				});
				let options = new RequestOptions({ headers: headers });
				this.http.post('https://api.fundacaocefetminas.org.br/getProfileInfo', data, options)
				.toPromise()
				.then((response) =>{
					if(response.json().success){
						console.log(response.json())
						this.profile.name=response.json().name;
						this.editProfileForm.controls['name'].setValue(this.profile.name);
						this.profile.cpf=response.json().cpf;
						this.editProfileForm.controls['cpf'].setValue(this.profile.cpf);
						this.profile.email=response.json().email;
						this.editProfileForm.controls['email'].setValue(this.profile.email);
						this.profile.profilepicpath=response.json().profilepicpath+"?"+new Date().getTime();
						this.load=true;
						this.changeRef.detectChanges();
					}
					else{
						this.profile.profilepicpath="/static/profilepic/default.png";
						this.changeRef.detectChanges();
					}
				})
				.catch((error) =>
				{
					console.error('API Error : ', error.status);
					console.error('API Error : ', JSON.stringify(error));
				});
			}
		})
	}
}
