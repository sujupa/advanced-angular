import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth-guard/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  firstName: string;
  lastName: string;
  schoolName: string;

  arrayNumbers = [1, 2, 3, 4];
  changesSaved: boolean = false;

  ngOnInit(): void {
    this.firstName = "Sujay";
    this.lastName = "Patil";
  }

  constructor(private authService: AuthService,
    private router: Router) { }

  getEvent1(event) {
    this.schoolName = event;
  }

  onLogin() {
    this.authService.login();
  }

  onLogout() {
    this.authService.logout();
  }

}
