import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /*passwordDisplayed: boolean = false;
  clickLogger = [];
  logDisplayed: string = '';
  onDisplay() {
   this.clickLogger.push('Click time : ' + Date.now());
   this.passwordDisplayed = !this.passwordDisplayed;
   console.log(this.clickLogger);
   }*/
  showSecret: boolean = false;
  log = [];

  onToggleDetails() {
    this.showSecret = !this.showSecret;
    this.log.push(new Date());
  }
}
