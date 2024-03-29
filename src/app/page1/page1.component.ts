import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
  dataReceive:string='';

  constructor(private service:NotificationService) { }

  ngOnInit() {
    this.GetMSg()
  }

  GetMSg(){
    this.service.notification
    .subscribe((data)=>{
      this.dataReceive=data;
    })

  }

}
