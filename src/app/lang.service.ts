import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { BaseService } from './baseservice';
import { Lang } from './lang';

@Injectable({
  	providedIn: 'root'
})
export class LangService extends BaseService<Lang[]> {

  	constructor(protected http: HttpClient) { 
		super();
		this.url = 'api/lang';
	}

	getEmptyRes(): Lang[] {
		return [];
	}
}
