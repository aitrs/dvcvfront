import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { BaseService } from './baseservice';
import { ExpShort } from './expshort';
import { ExpDetail } from './expdetail';

@Injectable({
  	providedIn: 'root'
})
export class ExpService extends BaseService<ExpShort[]> {

  	constructor(protected http: HttpClient) { 
		super();
		this.url = 'api/short';
	}

	getEmptyRes(): ExpShort[] {
		return [];
	}

	getEmptyDetail(): ExpDetail {
		let ret: ExpDetail = {
			pending: false,
			company: '',
			start: 0,
			end: 0,
			descriptionLines: [],
			skills: []
		}

		return ret;
	}

	getDetail(id: number) : Observable<ExpDetail>  {
		let detailUrl = 'api/exp/'+id;

		return this.http.get<ExpDetail>(detailUrl)
			.pipe(
				catchError(this.handleDetailError('Get Data From'+detailUrl, this.getEmptyDetail()))
			);
	}

	private handleDetailError(operation = 'operation', result?: ExpDetail) {
		return (error: any): Observable<ExpDetail> => {
			console.error(error);
			return of(result as ExpDetail);
		}
	}

}
