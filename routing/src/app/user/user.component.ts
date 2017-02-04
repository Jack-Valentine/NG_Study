import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
      <h1>User Component</h1>
      <a [routerLink]="['user']">User</a>
    `
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
