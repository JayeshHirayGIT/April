import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nana',
  templateUrl: './nana.component.html',
  styleUrls: ['./nana.component.css']
})
export class NanaComponent implements OnInit {

  strDAta: string = 'HI...Amit'
  strDataFromAmit:''
  constructor() { }

  ngOnInit() {
  }

}
