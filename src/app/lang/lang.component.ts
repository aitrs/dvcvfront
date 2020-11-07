import { Component, OnInit } from '@angular/core';
import { Lang } from '../lang';
import { LangService } from '../lang.service';
import { Foldable } from '../foldable';
import { state, trigger, animate, transition, style } from '@angular/animations';

@Component({
  	selector: 'app-lang',
  	templateUrl: './lang.component.html',
  	styleUrls: ['./lang.component.css'],
	animations: [
		trigger('laLoadAnim', [
			state('unloaded', style(
				{
					height: '0px',
					opacity: 0
				}
			
			)),
			state('unfold', style(
				{
					height: '{{maxHeight}}px',
					opacity: 1
				}
			
			), { params: { maxHeight: 0 }}),
			transition('unloaded => unfold', animate('1s ease')),
		])
	]
})
export class LangComponent extends Foldable implements OnInit {
	langs: Lang[];
	ldMaxH: number = 0;

  	constructor(private service: LangService) { 
  		super();
  	}

	getLangs(): void {
		this.service.getData().subscribe(
			(lgs) => {
				this.langs = lgs;
				this.ldMaxH = lgs.length*39;
				this.animState = 'unfold';
			}
		);
	}

  	ngOnInit(): void {
		this.getLangs();
  	}

}
