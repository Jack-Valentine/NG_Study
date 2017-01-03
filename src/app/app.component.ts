import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Inline Template</h1>
    <!-- <fa-databinding></fa-databinding> -->
    <fa-lifecycle *ngIf="!delete"></fa-lifecycle>
    <button (click)="delete = true">CLick to Delete</button>
  `
})
export class AppComponent {
  title = 'I changed it!';
  delete = false;
}
