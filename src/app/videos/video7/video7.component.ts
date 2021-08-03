import { Component, OnInit } from '@angular/core';
import * as jquery from 'jquery';
const $: JQueryStatic = jquery;
@Component({
  selector: 'app-video7',
  templateUrl: './video7.component.html',
  styleUrls: ['./video7.component.css']
})
export class Video7Component implements OnInit {

  constructor() { }


  ngOnInit(): void {



    $('.menu-icon').click(()=>{
      $('.sidebar').toggleClass('small-sidebar')
      $('.container').toggleClass('large-container')
  })


  $('.darkmode').click(()=>{
    if($('.darkmode').css('backgroundColor' , 'black') ){
      $('body').css('backgroundColor' , 'rgb(32, 31, 31)')
    $('.sidebar').css('backgroundColor' , 'rgb(32, 31, 31)')
    $('nav').css('backgroundColor' , 'rgb(32, 31, 31)')
    $('.container').css('backgroundColor' , 'rgb(32, 31, 31)')
    $('.nav-middle .search-box').css('backgroundColor' , 'white')
    $('.sidebar p').css('color' , 'white')
    $('.sidebar h3').css('color' , 'white')
    $(' .list-container .vid-list p').css('color' , 'white')
    $('.vid-info a ').css('color' , 'white')
    $(' .play-video h3 ').css('color' , 'white')
    $('  .play-video .play-video-info a').css('color' , 'white')
    $(' .play-video .play-video-info p').css('color' , 'white')
    $('  .publisher div p ').css('color' , 'white')
    $('  .publisher div span ').css('color' , 'white')
    $('  .publisher button ').css('color' , 'white')
    $('  .vid-description p ').css('color' , 'white')
    $(' .vid-description  h4  ').css('color' , 'white')
    $(' .old-comment .acomment-action a ').css('color' , 'white')
    $('  .vid-info p ').css('color' , 'white')
    $('.darkmode').css('display' , 'none')
  $('.lightmode2').css('display' , 'block')
     
  }else{
     
  }
  
})





$('.lightmode2').click(()=>{

  if($('.lightmode2').css('backgroundColor' , 'wheat')){
    $('body').css('backgroundColor' , 'white')
    $('.sidebar').css('backgroundColor' , 'white')
    $('nav').css('backgroundColor' , 'white')
    $('.container').css('backgroundColor' , '#f9f9f9')
    $('.nav-middle .search-box').css('backgroundColor' , 'transparent')
    $('.sidebar p').css('color' , '#336699')
    $('.sidebar h3').css('color' , ' #5a5a5a')
    $(' .list-container .vid-list p').css('color' , '#000')
    $('.vid-info a ').css('color' , '#000')
    $(' .play-video h3 ').css('color' , 'black')
    $(' .play-video .play-video-info a').css('color' , 'black')
    $(' .play-video .play-video-info p').css('color' , 'black')
    $(' .publisher div p ').css('color' , 'black')
    $(' .publisher div span ').css('color' , 'black')
    $(' .vid-description p ').css('color' , 'black')
    $(' .vid-description  h4  ').css('color' , 'black') 
     $(' .old-comment .acomment-action a ').css('color' , 'black')
     $(' .vid-info p ').css('color' , 'black')
    $('.lightmode2').css('display' , 'none')
    $('.darkmode').css('display' , 'block')

  }else{
     
  }
  
})



  
  

  
}

}
