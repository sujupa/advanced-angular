import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dynamic-component',
  templateUrl: './dynamic-component.component.html',
  styleUrls: ['./dynamic-component.component.css']
})
export class DynamicComponentComponent implements OnInit {

  @Input() message: string;
  @Output() closeAlert = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClose() {
    this.closeAlert.emit();
  }

}
