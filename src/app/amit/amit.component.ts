import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-amit',
  templateUrl: './amit.component.html',
  styleUrls: ['./amit.component.css']
})
export class AmitComponent implements OnInit {

  @Input() nanaTOAmit: string = '';
  @Output() amitStrEvent = new EventEmitter();
  strData:string="Data From AMIT"
  constructor() { }

  ngOnInit() {
    
  }

  onSend() {
    this.amitStrEvent.emit(this.strData)
  }

  
}
