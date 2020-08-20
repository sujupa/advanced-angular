import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  appStatus = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('stable');
    }, 2000);
  });

  servers = [
    {
      name: 'Server 123',
      instanceType: 'small',
      status: 'running',
      started: 'monday 2019'
    },
    {
      name: 'Server 456789',
      instanceType: 'medium',
      status: 'running',
      started: 'thursday 2018'
    },
    {
      name: 'Server 456789',
      instanceType: 'medium',
      status: 'stopped',
      started: 'thursday 2018'
    }
  ];

  filteredStatus: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
