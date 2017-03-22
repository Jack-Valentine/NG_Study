import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    .pipes {
      margin: 32px;
      padding: 32px;
    }
  `]
})
export class AppComponent {
  myValue = 'lowercase';
  myDate = new Date(2017, 3, 23);
  values = ['Milk', 'Bread', 'Beans', 'Egg', 'Oil'];
  asyncValue = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Data in here'), 2000);
  });
}

