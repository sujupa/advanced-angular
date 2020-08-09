import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation, ViewChild } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
  // encapsulation: ViewEncapsulation.None
})
export class TestComponent implements OnInit {

  @Input() element: { type: string, name: string, content: string };

  @Input('firstNameSujay') firstName;

  @Input() lastName;

  @Output('schoolName12') schoolName = new EventEmitter();

  @ViewChild('schoolViewChild', { static: true }) schoolViewChild;

  constructor() { }

  ngOnInit(): void {
    this.schoolName.emit("Amrita Vidyalayam");
  }

  sendingLocalReference(school) {
    console.log("Local Reference: ", school.value);
    console.log("View Child Reference: ", this.schoolViewChild.nativeElement.value);

  }

}
