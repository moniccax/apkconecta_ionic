import { Component, OnInit } from '@angular/core';
import { Crop } from '@ionic-native/crop/ngx';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { Storage } from '@ionic/storage';
import { File, FileEntry } from '@ionic-native/file/ngx';
import { ToastController,LoadingController } from '@ionic/angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { ChangeDetectorRef } from '@angular/core'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
	fileUrl: any = null;
	respData: any;
	profilepicpath: any;

	constructor(private imagePicker: ImagePicker,
  private crop: Crop,
  private transfer: FileTransfer,
	private storage:Storage,
	private file: File,
	private toastController: ToastController,
	private loadingController: LoadingController,
	private http: Http,
	private changeRef: ChangeDetectorRef) { }

  ngOnInit() {
  }

	ionViewWillEnter() {
		this.updateProfilePic();
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
						this.profilepicpath=response.json().profilepicpath+"?"+new Date().getTime();
						this.changeRef.detectChanges();
					}
					else{
						this.profilepicpath="/static/profilepic/default.png";
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
