import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export abstract class BaseService<T> {
	url: string;
	protected http: HttpClient;

	abstract getEmptyRes(): T;
	
	getData() : Observable<T> {
		return this.http.get<T>(this.url)
			.pipe(
				catchError(this.handleError('Get Data From '+this.url, this.getEmptyRes()))
			);
	}

	protected handleError(operation = 'operation', result?: T) {
		return (error: any): Observable<T> => {
			console.error(error);
			return of(result as T);
		}
	}
}
