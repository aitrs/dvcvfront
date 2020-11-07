import { Component, OnInit, Input } from '@angular/core';
import { ExpDetail } from '../expdetail';
import { state, trigger, animate, transition, style } from '@angular/animations';


@Component({
  	selector: 'app-expdetail',
  	templateUrl: './expdetail.component.html',
  	styleUrls: ['./expdetail.component.css']
})
export class ExpdetailComponent implements OnInit {
	@Input() item: ExpDetail;
	

  	constructor() { 
	}


  	ngOnInit(): void {
  	}
}
