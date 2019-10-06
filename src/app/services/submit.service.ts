import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpErrorResponse,HttpResponse } from '@angular/common/http';
import { Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SubmitService {

  constructor(public http: HttpClient) { }

	postSubmit (url, data): Observable<any> {
		const httpOptions = {
		headers: new HttpHeaders({
		'Content-Type' : 'application/json'
			})
		};
		return this.http.post(url, data, httpOptions);
	}

	imageSubmit(url,data): Observable<any> {
		return this.http.post(url, data);
	}
}
