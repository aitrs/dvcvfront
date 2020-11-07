import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { BaseService } from './baseservice';
import { Studies } from './studies';


@Injectable({
  	providedIn: 'root'
})
export class StudiesService extends BaseService<Studies[]> {

  	constructor(protected http: HttpClient) { 
		super();
		this.url = 'api/stud';
  	}

	getEmptyRes(): Studies[] {
		return [];
	}
}
