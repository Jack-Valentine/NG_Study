import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username: string = 'test';

  onUpdateServerName(event: any) {
    this.username = (<HTMLInputElement>event.target).value;
  }
}
