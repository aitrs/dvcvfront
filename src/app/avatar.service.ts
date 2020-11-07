import { Injectable } from '@angular/core';
import { BaseService } from './baseservice';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  	providedIn: 'root'
})
export class AvatarService  {
  	constructor(protected http: HttpClient) {}
	
	getImage(url: string): Observable<Blob> {
		return this.http.get(url, { responseType: 'blob' });
	}

	protected handleError(operation = 'operation', result?: Blob) {
		return (error: any): Observable<Blob> => {
			console.error(error);
			return of(result as Blob);
		}
	}
}
