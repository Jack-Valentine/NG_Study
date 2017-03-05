import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators, FormArray, FormBuilder} from "@angular/forms";

@Component({
    selector: 'data-driven',
    templateUrl: 'data-driven.component.html'
})
export class DataDrivenComponent {
    myForm: FormGroup;
    genders = [
      'male',
      'female'
    ]
    constructor(private formBuilder: FormBuilder) {
        /*this.myForm = new FormGroup({
            'userData': new FormGroup({
                'username': new FormControl('Max', Validators.required),
                'email': new FormControl('', [
                    Validators.required,
                    Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
                ])
            }),
            'password': new FormControl('', Validators.required),
            'gender': new FormControl('male'),
            'hobbies': new FormArray([
              new FormControl('Cooking')
            ])
        });*/
        this.myForm = formBuilder.group({
            'userData': formBuilder.group({
                'username': ['Max', Validators.required],
                'email': ['', [
                    Validators.required,
                    Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
                ]]
            }),
            'password': ['', Validators.required],
            'gender': ['male'],
            'hobbies': formBuilder.array([
                ['Cooking', Validators.required]
            ])
        })
    }
    onSubmit() {
        console.log(this.myForm);
    }
    onAddHobby() {
        (<FormArray>this.myForm.get('hobbies')).push(new FormControl('', Validators.required))
    }
}
