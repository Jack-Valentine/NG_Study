import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class HttpService {
  // private firebase url
  private json_url:string = '';
  constructor(private http: Http) { }  getDate() {
    return this.http.get(this.json_url);
  }
}
