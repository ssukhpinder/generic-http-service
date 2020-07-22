import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpGeneralService {
  url: string;
  constructor(public http: HttpClient) {
    this.url = environment.apiRoute;
  }

  post(apiRoute: string, body: any, header?: HttpHeaders) {
    return this.http.post(`${this.url + apiRoute}`, body, { headers: header });
  }

  get(apiRoute: string, header?: HttpHeaders) {
    return this.http.get(`${this.url + apiRoute}`, { headers: header });
  }

  put(apiRoute: string, body: any, header?: HttpHeaders) {
    return this.http.put(`${this.url + apiRoute}`, body, { headers: header });
  }

  delete(apiRoute: string, header?: HttpHeaders) {
    return this.http.delete(`${this.url + apiRoute}`, { headers: header });
  }
}
