import { Component, OnInit } from '@angular/core';
import { PracticeService } from '../practice.service';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {
 
  mypractice:string[]=[]
  constructor(private service:PracticeService) { }

  ngOnInit() {
   this.mypractice=this.service.getCourse()
  }


}
