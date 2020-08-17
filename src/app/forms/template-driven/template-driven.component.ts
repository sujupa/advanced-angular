import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {

  defaultValue: string = "Sujay.patil";
  genders = ['male', 'female'];
  @ViewChild('formSubmit123') form: NgForm;


  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form123: NgForm) {
    console.log(this.form);

    // To reset the form
    // this.form.reset();
  }

  // onSubmit(form: NgForm) {
  //   console.log("Submitted with event: ", form.form.value.email);

  // }

  suggestUserName() {
    let suggestedUsn = "SAP1234";

    // Method 1, but it OVERRIDES and every field is a must

    // this.form.setValue({
    //   userDataGroup: {
    //     username: suggestedUsn,
    //     email: 'sujay.patil@html.com',           --> This method is also VALID !!!
    //     fruits: 'Apple',
    //     gender: 'male'
    //   }
    // });

    // Method 2, every field name is not a must, you have freedom
    this.form.form.patchValue({
      userDataGroup: {
        username: suggestedUsn
      }
    });

  }

}
