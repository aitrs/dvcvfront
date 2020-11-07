import { Component, OnInit } from '@angular/core';
import { AvatarService } from '../avatar.service';

@Component({
  	selector: 'app-avatar',
  	templateUrl: './avatar.component.html',
  	styleUrls: ['./avatar.component.css']
})
export class AvatarComponent implements OnInit {
	img: any;
	imgLoading: boolean;
  	constructor(private service: AvatarService) { }
	
	createImageFromBlob(image: Blob) {
		let reader =  new FileReader();
		reader.addEventListener('load', () => {
			this.img = reader.result;
		}, false);

		if(image) {
			reader.readAsDataURL(image);
		}
	}

  	ngOnInit(): void {
		this.imgLoading = true;
		this.service.getImage('api/static/imgs/avatar.jpg').subscribe((data) => {
			this.createImageFromBlob(data);
			this.imgLoading = false;
		}, (error) => {
			console.log(error);
		});
  	}

}
