import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './general/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Video1Component } from './videos/video1/video1.component';
import { SidebarComponent } from './general/sidebar/sidebar.component';
import { Video2Component } from './videos/video2/video2.component';
import { Video3Component } from './videos/video3/video3.component';
import { Video4Component } from './videos/video4/video4.component';
import { Video5Component } from './videos/video5/video5.component';
import { Video6Component } from './videos/video6/video6.component';
import { Video7Component } from './videos/video7/video7.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    Video1Component,
    SidebarComponent,
    Video2Component,
    Video3Component,
    Video4Component,
    Video5Component,
    Video6Component,
    Video7Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
