import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, Form } from '@angular/forms';
import { Observable } from 'rxjs';
import { ResolvedStaticSymbol } from '@angular/compiler';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  get username() {
    return this.signUpForm.get('username');
  }

  get email() {
    return this.signUpForm.get('email');
  }

  get lastname() {
    return this.signUpForm.get('lastnameGroup.lastname');
  }

  getControls() {
    return (<FormArray>this.signUpForm.get('hobbies')).controls;
  }

  genders = ['male', 'female'];
  signUpForm: FormGroup;
  forbiddenUsernames = ['Chris', 'Anna'];

  constructor() { }

  ngOnInit(): void {

    this.signUpForm = new FormGroup({
      'lastnameGroup': new FormGroup({
        'lastname': new FormControl(null, Validators.required)
      }),
      'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
      'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    });

    this.signUpForm.valueChanges.subscribe((value) => {
      console.log("Value Changes: ", value);

    });

    this.signUpForm.statusChanges.subscribe((status) => {
      console.log("Status Changes: ", status);

    });

    // Setting value, here you have must enter/update/mention all fields
    // this.signUpForm.setValue({
    //   'username': "Sujay Patil UI Designer",
    //   'lastnameGroup': {
    //     'lastname': 'patil'                                                // Use any one of this
    //   },
    //   'email': 'sujupa@gmail.com',
    //   'gender': 'male',
    //   'hobbies': []
    // });

    // Set the fields according to your fields, nothing mandatory to mention all fields
    this.signUpForm.patchValue({
      'username': "Sujay Patil UI Designer from patch value",                 // Use any one of this
    });

    this.signUpForm.reset();

  }

  onSubmit() {
    console.log(this.signUpForm);
  }

  onAddHobby() {

    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signUpForm.get('hobbies')).push(control);

  }

  // Synchronous Custom Validator
  forbiddenNames(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return { 'nameIsForbidden': true };
    }
    return null; // It has to be null, it can't be false/true !!
  }

  // Asynchronous Custom Validator
  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {

    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({ 'emailIsForbidden': true });
        } else {
          resolve(null);
        }
      }, 1500);
    });

    return promise;

  }

}
