import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'fa-event-binding',
  template: `
    <button (click)="onCLicked()">Click me!</button>
  `,
  styles: []
})
export class EventBindingComponent {
  @Output() clicked = new EventEmitter<string>();

  onCLicked() {
    this.clicked.emit('It works!')
  }
}
