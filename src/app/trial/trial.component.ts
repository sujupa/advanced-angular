import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-trial',
  templateUrl: './trial.component.html',
  styleUrls: ['./trial.component.css']
})
export class TrialComponent implements OnInit, OnDestroy {

  idFromURL: string = "";
  nameFromURL: string = "";

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

    //Approach 1 To get QUERY PARAMETERS and FRAGMENT
    console.log(this.route.snapshot.queryParams);  // not good approach
    console.log(this.route.snapshot.fragment);

    //Approach 2 To get QUERY PARAMETERS and FRAGMENT reactively
    this.route.queryParams.subscribe();
    this.route.fragment.subscribe();

    // To get just PARAMS from url
    this.idFromURL = this.route.snapshot.params['id'];  // do not use this method
    this.nameFromURL = this.route.snapshot.params['name']; // do not use this method

    this.route.params.subscribe((params: Params) => { // use this method
      this.idFromURL = params['id'];
      this.nameFromURL = params['name'];
    });

  }

  ngOnDestroy() {

  }

}
