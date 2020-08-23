import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth-guard/auth.service';
import { Router } from '@angular/router';
import { LoggingService } from './logging.service';

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

    this.loggingService.printLog('Logging from App.component.ts');
  }

  constructor(private authService: AuthService,
    private router: Router,
    private loggingService: LoggingService) { }

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
