import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  myid:number=9;
  username:string='Amit Khairnar';
  myjson={
    id:14,
    fname:'amit',
    lname:'Khairnar'
  }

  constructor(private router:Router) { }

  ngOnInit() {
  }

  onPage1(){
    this.router.navigate([''])

  }
  onPage2(){
    this.myid=12
    this.router.navigate(['/page2',this.myid])

  }
  onPage3(){
    this.myid=12;
    this.username='Ankit';
    this.router.navigate(['/page3',this.myid,this.username])

  }
  onFollower(){
    this.router.navigate(['/Follower']);

  }
  onQueryparam(){
    this.router.navigate(['/QueryParameter'],{
      queryParams:this.myjson
    })
  }

}
