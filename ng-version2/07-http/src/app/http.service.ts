import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import { Observable } from "rxjs/rx";

@Injectable()
export class HttpService {
  // private firebase url
  private json_url:string = 'https://angular2-http-f649b.firebaseio.com/title.json';
  private set_url:string = 'https://angular2-http-f649b.firebaseio.com/data.json';

  private handleError(error: any) {
    console.log(error);
    return Observable.throw(error);
  }

  constructor(private http: Http) { }

  getData() {
    return this.http.get(this.json_url).map((response: Response) => response.json());
  }

  sendData(user: any) {
    const body = JSON.stringify(user);
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.set_url, body, {headers: headers})
      .map((data: Response) => data.json())
      .catch(this.handleError);
  }

  getOwnData() {
    return this.http.get(this.set_url).map((response: Response) => response.json());
  }
}
