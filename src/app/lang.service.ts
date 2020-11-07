import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { BaseService } from './baseservice';
import { Lang } from './lang';
import { environment } from '../environments/environment';

@Injectable({
  	providedIn: 'root'
})
export class LangService extends BaseService<Lang[]> {

  	constructor(protected http: HttpClient) { 
		super();
		this.url = environment.apiUrl+'/api/lang';
	}

	getEmptyRes(): Lang[] {
		return [];
	}
}
