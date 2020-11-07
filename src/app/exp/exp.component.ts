import { Component, OnInit, OnChanges, ViewChild, ElementRef } from '@angular/core';
import { ExpShort } from '../expshort';
import { ExpDetail } from '../expdetail';
import { ExpService } from '../exp.service';
import { Foldable } from '../foldable';

import { state, trigger, animate, transition, style } from '@angular/animations';


@Component({
  	selector: 'app-exp',
  	templateUrl: './exp.component.html',
  	styleUrls: ['./exp.component.css'],
	animations: [
		trigger('weLoadAnim', [
			state('mini', style(
				{
					height: '37px',
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
					height: '{{maxHeight}}px',
					opacity: 1
				}
			
			), { params: { maxHeight: 0 }}),
			transition('unloaded => mini', animate('1s ease')),
			transition('unfold <=> mini', animate('1s ease'))
		])
	]
})
export class ExpComponent extends Foldable implements OnInit {
	exps: ExpShort[];
	detail: ExpDetail = null;
	ldMaxH: number;
	prevId: number;
	selId: number;
	@ViewChild('detcont') detailElement: ElementRef;
  	constructor(private service: ExpService) { 
		super();
	}

	getExpShorts(): void {
		this.service.getData().subscribe(
			(es) => {
				this.exps = es;
				this.animState = 'mini';
				this.ldMaxH = this.exps.length*39;
			}
		);
	}

  	ngOnInit(): void {
		this.getExpShorts();
  	}

	shortClick(id: number) {
		this.selId = id;
		if(this.selId !== this.prevId) {
			this.service.getDetail(this.selId).subscribe(
				(det) => {
					this.detail = det;
					this.prevId = this.selId;
					setTimeout(() => { 
						this.detailElement.nativeElement.scrollIntoView({behavior:"smooth"});
					}, 1);
				}
			);
		} else {
			if(this.detail) {
				this.detail = null;
				this.selId = -1;
			} else {
				this.service.getDetail(this.selId).subscribe(
					(det) => {
						this.detail = det;
						this.prevId = this.selId;
						setTimeout(() => { 
							this.detailElement.nativeElement.scrollIntoView({behavior:"smooth"});
						}, 1);
					}
				);
			}
		}
	}
}
