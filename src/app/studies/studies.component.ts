import { Component, OnInit } from '@angular/core';
import { Studies } from '../studies';
import { StudiesService } from '../studies.service';
import { Foldable } from '../foldable';
import { state, trigger, animate, transition, style } from '@angular/animations';

@Component({
  	selector: 'app-studies',
  	templateUrl: './studies.component.html',
  	styleUrls: ['./studies.component.css'],
	animations: [
		trigger('stLoadAnim', [
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
export class StudiesComponent extends Foldable implements OnInit {
	studies: Studies[];
	ldMaxH: number = 0;

  	constructor(private service: StudiesService) { 
		super();
	}

	getStudies(): void {
		this.service.getData().subscribe(
			(studs) => {
				this.studies = studs;
				this.ldMaxH = studs.length*39;
				this.animState = 'unfold';
			}
		);
	}
	
 	ngOnInit(): void {
		this.getStudies();
  	}
}
