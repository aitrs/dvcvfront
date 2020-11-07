import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { BaseService } from './baseservice';
import { Identity } from './identity';

@Injectable({
  	providedIn: 'root'
})

export class IdentityService extends BaseService<Identity> {
  	constructor(protected http: HttpClient) { 
		super();
		this.url = "api/";
	}
	
	getEmptyRes(): Identity {
		let ret: Identity = {
			address: "",
			birthdate: null,
			avatar: null,
			country: "",
			drivelicences: [],
			email: "",
			firstname: "",
			name: "",
			nationality: "",
			phone: "",
			presentationLines: [],
			town: "",
			website: "",
			zip: "",
		}

		return ret;
	}
}
