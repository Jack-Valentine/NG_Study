import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /*passwordDisplayed: boolean = false;
  clickLogger = [];
  logDisplayed: string = '';*/
  showSecret: boolean = false;
  log = [];

  /*onDisplay() {
    this.clickLogger.push('Click time : ' + Date.now());
    this.passwordDisplayed = !this.passwordDisplayed;
    console.log(this.clickLogger);
  }*/

  onToggleDetails() {
    this.showSecret = !this.showSecret;
    this.log.push(this.log.length + 1);
  }
}
