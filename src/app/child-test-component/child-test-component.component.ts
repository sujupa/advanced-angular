import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth-guard/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CanComponentDeactivate } from '../auth-guard/can-deactivate-guard.service';

@Component({
  selector: 'app-child-test-component',
  templateUrl: './child-test-component.component.html',
  styleUrls: ['./child-test-component.component.css']
})
export class ChildTestComponentComponent implements OnInit, CanComponentDeactivate {

  changesSaved: boolean = false;

  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveChanges() {
    this.changesSaved = true;
    this.router.navigate(['/trial']);
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.changesSaved) {
      return true;
    }

    if (this.changesSaved != true) {
      return confirm("Do you want to leave page?");
    } else {
      return true;
    }

  }

}
