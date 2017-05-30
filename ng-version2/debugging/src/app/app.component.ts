import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  testData: string[] = [];
  ngOnInit() {
    for (let i = 0; i < 5; i++) {
      this.testData.push('New Item: ' + i);
    }
  }
  title = 'app works!';
}
