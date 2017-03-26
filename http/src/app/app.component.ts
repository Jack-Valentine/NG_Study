import { Component } from '@angular/core';
import { HttpService } from "./http.service";
import {Response} from "@angular/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(private httpService: HttpService) { }
  ngOnInit() {
    this.httpService.getDate()
      .subscribe(
        (data: Response) => console.log(data)
      );

  }
}
