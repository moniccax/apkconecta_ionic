import { Component, OnInit } from '@angular/core';
import { Crop } from '@ionic-native/crop/ngx';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-profilepic',
  templateUrl: './profilepic.page.html',
  styleUrls: ['./profilepic.page.scss'],
})
export class ProfilepicPage implements OnInit {
	fileUrl: any = null;
	respData: any;

	constructor(private imagePicker: ImagePicker,
  private crop: Crop,
  private transfer: FileTransfer,
	private storage:Storage) { }


  ngOnInit() {
  }

	cropUpload() {
  this.imagePicker.getPictures({ maximumImagesCount: 1, outputType: 0 }).then((results) => {
    for (let i = 0; i < results.length; i++) {
        console.log('Image URI: ' + results[i]);
        this.crop.crop(results[i], { quality: 100 })
          .then(
            newImage => {
              console.log('new image path is: ' + newImage);
              const fileTransfer: FileTransferObject = this.transfer.create();
              const uploadOpts: FileUploadOptions = {
                 fileKey: 'file',
                 fileName: newImage.substr(newImage.lastIndexOf('/') + 1),
								 params: {token: this.storage.get('token')}
              };

              fileTransfer.upload(newImage, 'https://api.fundacaocefetminas.org.br/atualizar_foto_perfil', uploadOpts)
               .then((data) => {
                 console.log(data);
                 //this.respData = JSON.parse(data.response);
                 //console.log(this.respData);
                 //this.fileUrl = this.respData.fileUrl;
               }, (err) => {
                 console.log(err);
               });
            },
            error => console.error('Error cropping image', error)
          );
    }
  }, (err) => { console.log(err); });
}
}
