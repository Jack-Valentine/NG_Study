import { Component } from '@angular/core';
import { HttpService } from "./http.service";
import {Response} from "@angular/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  items: any[] = [];

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.getDate()
      .subscribe(
        (data: any) => console.log(data)
      );
  }
  onSubmit(username: string, email: string) {
    this.httpService.sendData({username: username, email: email})
      .subscribe(
        data => console.log(data)
      );
  }
  onGetData() {
    this.httpService.getOwnData().subscribe(
      data => {
        const tmpArray = [];
        for (let key in data) {
          // console.log(data[key]);
          tmpArray.push(data[key]);
        }
        this.items = tmpArray;
        console.log(this.items);
      }
    );
  }
}
