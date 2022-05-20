import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding2',
  templateUrl: './eventbinding2.component.html',
  styleUrls: ['./eventbinding2.component.css']
})
export class Eventbinding2Component implements OnInit {
  count:number=0;
 
  result:number=0;

  constructor() { }

  ngOnInit() {
  }
  onAddition(num1,num2){
    let n1:number=+num1;
    let n2:number=+num2;
    this.result=n1+n2;
  }
  onChange(){
    console.log("Change event occur");
  }
  onKeyup(){
    console.log("Keyup event occur")
  }
  onKeydown(){
    if(this.count==160)
    console.log("limit ends")
    this.count++;
  }

}
