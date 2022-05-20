import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding1',
  templateUrl: './eventbinding1.component.html',
  styleUrls: ['./eventbinding1.component.css']
})
export class Eventbinding1Component implements OnInit {
  count:number=0;

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    if(this.count==0){
      console.log('Click Event Occur');
      this.count++;
    }
    
  }
  onImage(){
    console.log("on Image click")
  }
  onEventUse(myevent){
    console.log(myevent);
    console.log("Data is ====> "+myevent.target.value);
  }
  onSend(myname){
    console.log(myname)
    console.log(myname.value);
    myname.style.background='green';
    myname.style.color='white';
  }
  onSend1(myvalue){
    console.log(myvalue)
  }


}
