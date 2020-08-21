import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpEventType } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Posts } from './posts';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  titleArray = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    const jsonObjectDummy = { name: 'Sujay' };

    // POST Method
    // this.http.post('https://www.linkToYourPost.com', jsonObjectDummy).subscribe((data) => {    //works
    //   console.log(data);
    // });

    // GET Method
    this.http.get<Posts[]>('https://jsonplaceholder.typicode.com/posts',
      {
        headers: new HttpHeaders({ 'Custom-Header': 'Hello' }),
        params: new HttpParams().set('key', 'value'),
        observe: 'response'     // can also use 'body' | If you give 'response' then you will get complete httpResponse not only body, so while accessing data use responseData.body as used below
      })
      .pipe(map((responseData) => {    // Posts[] means array of type Posts

        console.log(responseData);

        responseData.body.forEach(ele => {
          this.titleArray.push(ele.title);
        });

        return this.titleArray;
      }))
      .subscribe((data) => {
        console.log('http data: ', data);
      }, (error) => {
        console.log(`Error while fetching data: ${error.message}`);

      });


    // GET method
    this.http.get<Posts[]>('https://jsonplaceholder.typicode.com/posts',
      {
        observe: 'events',
        responseType: 'json'
      })
      .pipe(tap((event) => {
        console.log("Event: ", event);

        if (event.type === HttpEventType.Sent) {
          console.log('Request has been Sent!!');
        }

        if (event.type === HttpEventType.Response) {
          console.log('Event body: ', event.body);
        }
      }))
      .subscribe((data) => {

      }, (error) => {

      });


  }

}
