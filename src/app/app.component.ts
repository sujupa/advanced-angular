import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  firstName: string;
  lastName: string;
  schoolName: string;

  ngOnInit(): void {
    this.firstName = "Sujay";
    this.lastName = "Patil";
  }

  constructor() { }

  getEvent1(event) {
    this.schoolName = event;
  }

}
