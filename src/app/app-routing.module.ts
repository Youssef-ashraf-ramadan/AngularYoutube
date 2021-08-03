import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Video1Component } from './videos/video1/video1.component';
import { Video2Component } from './videos/video2/video2.component';
import { Video3Component } from './videos/video3/video3.component';
import { Video4Component } from './videos/video4/video4.component';
import { Video5Component } from './videos/video5/video5.component';
import { Video6Component } from './videos/video6/video6.component';
import { Video7Component } from './videos/video7/video7.component';


const routes: Routes = [

{path : "" , component : HomeComponent},
{path : "home" , component : HomeComponent},
{path : "Home" , component : HomeComponent},
{path : "VidTube" , component : HomeComponent},
{path : "vidtube" , component : HomeComponent},
{path : "youtube" , component : HomeComponent},
{path : "ربنا-انك-جامع-الناس" , component : Video1Component},
{path : "video1" , component : Video1Component},
{path : "video2" , component : Video2Component},
{path : "سوره-العنكبوت-كامله" , component : Video2Component},
{path : "video3" , component : Video3Component},
{path : "سوره-المؤمنون" , component : Video3Component},
{path : "أفرأيت-الذي-كفر-باياتنا" , component : Video4Component},
{path : "video4" , component : Video4Component},
{path : "video5" , component : Video5Component},
{path : "لا-تحزن-ان-الله-معنا" , component : Video5Component},
{path :"واصبر-علي-ما-يقولون" , component : Video6Component},
{path :"video6" , component : Video6Component},
{path :"يا-عبادي-الذين-امنو-ان-ارضي-واسعه" , component : Video7Component},
{path :"video7" , component : Video7Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
