import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

 @Output() ChildStrEvent =new EventEmitter();
 @Output() ChildjsonEvent =new EventEmitter();

 strdata:string='Data From Child';
 jsonObj={
   fname:'Amit',
   id:12,
   role:'Developer'
 }

  constructor() { }

  ngOnInit() {
  }
  onSend(){
    this.ChildStrEvent.emit(this.strdata);
    this.ChildjsonEvent.emit(this.jsonObj);
  }

}
