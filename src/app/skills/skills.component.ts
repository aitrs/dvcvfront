import { Component, OnInit } from '@angular/core';
import { Skill } from '../skill';
import { SkillsService } from '../skills.service';
import { Foldable } from '../foldable';
import { state, trigger, animate, transition, style } from '@angular/animations';

@Component({
  	selector: 'app-skills',
  	templateUrl: './skills.component.html',
  	styleUrls: ['./skills.component.css'],
	animations: [
		trigger('skLoadAnim', [
			state('mini', style(
				{
					height: '30px',
					opacity: 1
				}
			)),
			state('unloaded', style(
				{
					height: '0px',
					opacity: 0
				}
			
			)),
			state('unfold', style(
				{
					height: '180px',
					opacity: 1
				}
			
			)),
			transition('unloaded => mini', animate('1s ease')),
			transition('unfold <=> mini', animate('1s ease'))
		])
	]
})

export class SkillsComponent extends Foldable implements OnInit {
	skills: Skill[];

  	constructor(private service: SkillsService) { 
		super();
	}

	getSkills(): void {
		this.service.getData().subscribe(
			(sks) => {
				this.skills = sks;
				this.animState = 'mini';
			}
		);
	}

  	ngOnInit(): void {
		this.getSkills();
  	}
}
