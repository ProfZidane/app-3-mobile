import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
/*
  Generated class for the RequestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RequestProvider {
  getCount = 'http://localhost:3000/request/get-req/';
  getStatusURL = 'http://localhost:3000/medical/get-status/';
   getCompteUrl = 'http://localhost:3000/credit/get-compte/';
   exitUrl = 'http://localhost:3000/request/do-exit-request';

   getMealURL = 'http://localhost:3000/meal/get-meal-id/';
  constructor(public http: HttpClient) {
    console.log('Hello RequestProvider Provider');
  }

  getHeaders() {
    if (localStorage.getItem('userToken') !== null) {
      let headers: HttpHeaders = new HttpHeaders();
      headers = headers.append('auth-token', localStorage.getItem('userToken'));

      return headers;
    }
  }

  getCompte(id): Observable<any> {
    return this.http.get(this.getCompteUrl + id, { headers: this.getHeaders() });
  }

  getCounter(id): Observable<any> {
    return this.http.get(this.getCount + id, { headers: this.getHeaders() });
  }

  getStatusById(id): Observable<any> {
    return this.http.get(this.getStatusURL + id, { headers: this.getHeaders() });
  }

  DoRequestOut(data): Observable<any> {
    return this.http.post(this.exitUrl, data, { headers: this.getHeaders() });
  }


  getMealById(id): Observable<any> {
    return this.http.get(this.getMealURL + id, { headers: this.getHeaders() });
  }
}
