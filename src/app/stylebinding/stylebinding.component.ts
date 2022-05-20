import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stylebinding',
  templateUrl: './stylebinding.component.html',
  styleUrls: ['./stylebinding.component.css']
})
export class StylebindingComponent implements OnInit {
  serverId:number = 10;
  serverStatus: string = 'offline';
  mycolor:string='';
  rating:number=21;
  jsonObj={
    color:'blue',
    fontStyle:'italic',
    "font-size":'32px'
  }

  constructor() {
    this.serverStatus = Math.random()>0.5 ? 'online' : 'offline';
   }

  ngOnInit() {
  }

  getServerStatus(){
    return this.serverStatus;
  }

}
