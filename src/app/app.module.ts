import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StringinterpolationComponent } from './stringinterpolation/stringinterpolation.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { FormsModule } from '@angular/forms';
import { DemotdfComponent } from './demotdf/demotdf.component';
import { IfdirectiveComponent } from './ifdirective/ifdirective.component';
import { StylebindingComponent } from './stylebinding/stylebinding.component';
import { ServersComponent } from './servers/servers.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { Eventbinding1Component } from './eventbinding1/eventbinding1.component';
import { Eventbinding2Component } from './eventbinding2/eventbinding2.component';
import { FordirectiveComponent } from './fordirective/fordirective.component';
import { SwitchdirectiveComponent } from './switchdirective/switchdirective.component';
import { ParentComponent } from './parent/parent.component';
import { Child1Component } from './child1/child1.component';
import { Task9Component } from './task9/task9.component';
import { Child2Component } from './child2/child2.component';
import { CourseComponent } from './course/course.component';
import { CourseService } from './course.service';
import { PostComponent } from './post/post.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { FollowerComponent } from './follower/follower.component';
import { MyfollowerComponent } from './myfollower/myfollower.component';
import { QueryParameterComponent } from './query-parameter/query-parameter.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { NotificationComponent } from './notification/notification.component';
import { NanaComponent } from './nana/nana.component';
import { AmitComponent } from './amit/amit.component';
import { PracticeComponent } from './practice/practice.component';
import { PracticeService } from './practice.service';

@NgModule({
  declarations: [
    AppComponent,
    StringinterpolationComponent,
    TwowaybindingComponent,
    DemotdfComponent,
    IfdirectiveComponent,
    StylebindingComponent,
    ServersComponent,
    ClassBindingComponent,
    Eventbinding1Component,
    Eventbinding2Component,
    FordirectiveComponent,
    SwitchdirectiveComponent,
    ParentComponent,
    Child1Component,
    Task9Component,
    Child2Component,
    CourseComponent,
    PostComponent,
    HomeComponent,
    Page1Component,
    Page2Component,
    Page3Component,
    FollowerComponent,
    MyfollowerComponent,
    QueryParameterComponent,
    NotfoundComponent,
    NotificationComponent,
    NanaComponent,
    AmitComponent,
    PracticeComponent
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CourseService,PracticeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
