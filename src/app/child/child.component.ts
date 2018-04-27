import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  loggedIn:boolean = false;

  @Output() updateLoginStatusInParent = new EventEmitter();

  constructor() { }

  toggleUserStatus(){
    this.loggedIn = !this.loggedIn;
    this.updateLoginStatusInParent.emit(this.loggedIn);
  }


  ngOnInit() {
    this.updateLoginStatusInParent.emit(this.loggedIn);
  }

}
