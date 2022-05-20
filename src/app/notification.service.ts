import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  // notificaton=new Subject<string>();
     notification=new BehaviorSubject<string>('');

  constructor() { }

  SendNotification(msg){

    this.notification.next(msg);

 }

}
