import { Injectable } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';

import 'rxjs/RX';

@Injectable()
export class HttpService {
  // private firebase url
  private json_url:string = '';
  private set_url:string = '';

  constructor(private http: Http) { }

  getData() {
    return this.http.get(this.json_url).map((response: Response) => response.json());
  }

  sendData(user: any) {
    const body = JSON.stringify(user);
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.set_url, body, {headers: headers}).map((data: Response) => data.json());
  }

  getOwnData() {
    return this.http.get(this.set_url).map((response: Response) => response.json());
  }
}
