import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { BaseService } from './baseservice';
import { Skill } from './skill';
import { environment } from '../environments/environment';

@Injectable({
  	providedIn: 'root'
})
export class SkillsService extends BaseService<Skill[]> {

  	constructor(protected http: HttpClient) { 
		super();
		this.url = environment.apiUrl+'/api/skills';
	}

	getEmptyRes(): Skill[] {
		return [];
	}
}
