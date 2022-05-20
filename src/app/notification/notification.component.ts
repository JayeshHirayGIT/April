import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  NotificatonMSG:string='';
  constructor(private notificationService:NotificationService) { }

  ngOnInit() {
    this.NotificationValue();

  }

  NotificationValue(){
    this.notificationService.notification
    .subscribe((data)=>{
      //this.NotificatonMSG=(<string>data);
      this.NotificatonMSG=data;

    })
  }

}
