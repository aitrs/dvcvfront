import { Component, OnInit } from '@angular/core';
import { Identity } from '../identity';
import { IdentityService } from '../identity.service';
import { state, trigger, animate, transition, style } from '@angular/animations';
import { Foldable } from '../foldable';

@Component({
  	selector: 'app-identity',
  	templateUrl: './identity.component.html',
  	styleUrls: ['./identity.component.css'],
	animations: [
		trigger('loadAnim', [
			state('max', style(
				{
					marginLeft: '120px',
					opacity: 1
				}
			)),
			state('none', style(
				{
					marginLeft: '0px',
					opacity: 0
				}
			)),
			transition('none => max', animate('2s ease'))
		]),
		trigger('expandContact', [
			state('expand', style(
				{
					height: '250px',
					marginBottom: '5px',
					opacity: 1
				}
			)),
			state('fold', style(
				{
					height: '0px',
					marginBottom: '60px',
					opacity: 0
				}
			)),
			transition('fold <=> expand', animate('500ms ease'))
		]),
		trigger('presLoadAnim', [
			state('unloaded', style(
				{
					height: '0px',
					opacity: 0
				}
			)),
			state('loaded', style(
				{
					height: '100px',
					opacity: 1
				}
			)),
			transition('unloaded => loaded', animate('2s ease'))
		]),
		trigger('postLoadAnim', [
			state('unloaded', style(
				{
					marginLeft: '0px',
					opacity: 0
				}
			)),
			state('loaded', style(
				{
					marginLeft: '650px',
					opacity: 1
				}
			)),
			transition('unloaded => loaded', animate('1s ease'))
		])
	]
})

export class IdentityComponent implements OnInit {
	identity: Identity;
	state: string = 'none';
	pststate: string = 'unloaded';
	expandContactState: string = 'fold';
	expandButtonText: string = '+';
	expanded: boolean = false;
	age: number;
	panim: string = 'unloaded';

  	constructor(private service: IdentityService) { 
	}

	getIdentity(): void {
		this.service.getData().subscribe(
			(id) => { 
				this.identity = id;
				let locnow = Date.now();
				this.age = locnow - this.identity.birthdate;
				this.age = Math.floor(this.age/(1000*60*60*24*365.15));
			}
		);
	}

  	ngOnInit(): void {
		this.getIdentity();
  	}

	ngAfterViewInit(): void {
		setTimeout(() => { 
			this.state = 'max';
			this.panim = 'loaded';
		}, 10);
		setTimeout(() => {
			this.pststate = 'loaded';
		}, 1000);
		
	}

	expandButtonClick(): void {
		this.expanded = !this.expanded;
		this.expanded ? this.expandButtonText = '-' : this.expandButtonText = '+';
		this.expanded ? this.expandContactState = 'expand' : this.expandContactState = 'fold';
	}
}
