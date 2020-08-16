import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { interval, Subscription, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-trial',
  templateUrl: './trial.component.html',
  styleUrls: ['./trial.component.css']
})
export class TrialComponent implements OnInit, OnDestroy {

  idFromURL: string = "";
  nameFromURL: string = "";

  private firstObsSubscription: Subscription;
  private customIntervalObservable: Subscription;

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

    // Observables
    // this.firstObsSubscription = interval(1000).subscribe(count => {
    //   console.log("Count: ", count);

    // });

    // Custom Observables
    const customIntervalObservable1234 = Observable.create((observer) => {

      let count = 0;

      setInterval(() => {

        observer.next(count);

        if (count === 2) {
          observer.complete();
        }

        if (count > 3) {
          observer.error(new Error("Count is greater than 3!!"));
        }
        count++;

      }, 1000);

    });

    // Only map function
    // const pipeValue = customIntervalObservable1234.pipe(map((data: number) => {
    //   return 'Round: ' + (data + 1);
    // }));

    // Both map and filter
    const pipeValue = customIntervalObservable1234.pipe(filter((data: number) => {
      return data > 0;
    }), map((data: number) => {
      return 'Round: ' + (data + 1);
    }));

    this.customIntervalObservable = pipeValue.subscribe(data => {
      console.log("Custom Obervable Data: ", data);
    }, error => {
      console.log("Error got in subscribe: ", error);
    }, () => {
      console.log('Completed!');
    }

    );



  }

  ngOnDestroy() {
    // this.firstObsSubscription.unsubscribe();
    this.customIntervalObservable.unsubscribe();
  }

}
