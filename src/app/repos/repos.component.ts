import { Component, OnInit } from '@angular/core';
import { Foldable } from '../foldable';
import { state, trigger, animate, transition, style } from '@angular/animations';

@Component({
  	selector: 'app-repos',
  	templateUrl: './repos.component.html',
  	styleUrls: ['./repos.component.css'],
	animations: [
		trigger('reLoadAnim', [
			state('unloaded', style(
				{
					height: '0px',
					opacity: 0
				}
			
			)),
			state('unfold', style(
				{
					height: '100px',
					opacity: 1
				}
			
			), { params: { maxHeight: 0 }}),
			transition('unloaded => unfold', animate('1s ease')),
		])
	]
})
export class ReposComponent extends Foldable implements OnInit {

  	constructor() { 
		super();
	}

  	ngOnInit(): void {
		setTimeout( () => {
			this.animState = 'unfold';
		}, 1);
  	}

}
