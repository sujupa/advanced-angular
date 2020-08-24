import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth-guard/auth.service';
import { Router } from '@angular/router';
import { LoggingService } from './logging.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('divState', [
      state('normal123', style({
        'background-color': 'red',
        transform: 'translateX(0)'
      })),
      state('highlighted123', style({
        'background-color': 'blue',
        transform: 'translateX(100px)'
      })),
      transition('normal123 <=> highlighted123', animate(300))
      // transition('highlighted123 => normal123', animate(300))
    ]),
    trigger('wildState', [
      state('normal123', style({
        'background-color': 'red',
        transform: 'translateX(0) scale(1)'
      })),
      state('highlighted123', style({
        'background-color': 'blue',
        transform: 'translateX(100px) scale(1)'
      })),
      state('shrunken123', style({
        'background-color': 'green',
        transform: 'translateX(0) scale(0.5)'
      })),
      transition('normal123 => highlighted123', animate(300)),
      transition('highlighted123 => normal123', animate(800)),
      transition('shrunken123 <=> *', [
        style({
          'background-color': 'orange'
        }),
        animate(1000, style({
          'border-radius': '50px'
        })),
        animate(500)
      ])
    ])
  ]
})
export class AppComponent implements OnInit {

  firstName: string;
  lastName: string;
  schoolName: string;

  state = "normal123";
  wildState = "normal123";

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

  onAnimate() {
    this.state == 'normal123' ? this.state = 'highlighted123' : this.state = 'normal123';

    this.wildState == 'normal123' ? this.wildState = 'highlighted123' : this.wildState = 'normal123';
  }

  onShrink() {
    this.wildState = 'shrunken123';
  }

  animationStarted(event) {
    console.log("Animation Started with event: ", event);
  }

  animationDone(event) {
    console.log("Animation Ended with event: ", event);
  }

}
