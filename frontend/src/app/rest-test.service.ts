import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


const endpoint = 'api/ping';

@Injectable()
export class RestTestService {

  constructor(private http: HttpClient) { }

  apiCall(): Observable<any> {
    return this.http.get(endpoint);
  }

}
