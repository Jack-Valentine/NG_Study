import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Inline Template</h1>
    <!-- <fa-databinding></fa-databinding> -->
    <fa-lifecycle *ngIf="!delete" [bindable]="boundValue" >
        <p #boundContent>{{test}}</p>
    </fa-lifecycle>
    <button (click)="delete = true">Click to Delete</button>
    <button (click)="test = 'Changed Value'">Click to Change Content</button>
    <button (click)="boundValue = 2000">Click to Change Binding</button>
  `
})
export class AppComponent {
  title = 'I changed it!';
  delete = false;
  test = 'Starting Value'
  boundValue = 1000;
}
