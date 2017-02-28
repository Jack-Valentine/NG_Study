import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'template-driven',
  templateUrl: 'template-driven.component.html',
  styles: ['input.ng-invalid { border: 1px solid red }']
})
export class TemplateDrivenComponent {
  user = {
    username: 'JackValentine',
    email: 'jackvalentine@jackarchiv.com',
    password: 'test'
  };

  onSubmit(form: NgForm) {
    console.log(this.user);
  }
}