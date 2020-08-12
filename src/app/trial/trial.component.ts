import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-trial',
  templateUrl: './trial.component.html',
  styleUrls: ['./trial.component.css']
})
export class TrialComponent implements OnInit {

  idFromURL: string = "";
  nameFromURL: string = "";

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.idFromURL = this.route.snapshot.params['id'];
    this.nameFromURL = this.route.snapshot.params['name'];

  }

}
