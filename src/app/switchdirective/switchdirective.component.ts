import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switchdirective',
  templateUrl: './switchdirective.component.html',
  styleUrls: ['./switchdirective.component.css']
})
export class SwitchdirectiveComponent implements OnInit {

  choice:string='';
  // jsonObj={
  //   color:'white',
  //   background:'black'
  // }

  constructor() { }

  ngOnInit() {
  }

  onClick(colorname:string){
    this.choice=colorname.toLowerCase().trim();

  }

}

