import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fordirective',
  templateUrl: './fordirective.component.html',
  styleUrls: ['./fordirective.component.css']
})
export class FordirectiveComponent implements OnInit {

  arrProduct=[
    {
      name:'Samsung',
      price:25000,
      quantity:1
    },
    {
      name:'OnePlus',
      price:50000,
      quantity:3
    },
    {
      name:'Apple',
      price:125000,
      quantity:6
    },
    {
      name:'Snapdragon',
      price:150000,
      quantity:9
    }
  ]

  selected:string=''

  constructor() { }

  ngOnInit() {
  }
  onMouseOver(myitem){
    console.log("Mouse Over Event Occur")
    this.selected=myitem.name;
  }
  onMouseOut(){
    console.log("Mouse Out Event Occur")
    this.selected=''
  }

}
