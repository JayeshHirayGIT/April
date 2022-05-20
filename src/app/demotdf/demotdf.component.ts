import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-demotdf',
  templateUrl: './demotdf.component.html',
  styleUrls: ['./demotdf.component.css']
})
export class DemotdfComponent implements OnInit {

  country:any[]=[
    {cid:1,name:'India'},
    {cid:2,name:'USA'},
    {cid:3,name:'Japan'}
  ]

  constructor() { }

  ngOnInit() {
  }

  onSubmit(f:NgForm){
    console.log("Email id is "+f.value.email);

    let obj={
      email:f.value.email,
      username:f.value.myusername
    }

  }

}
