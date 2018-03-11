import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  ngOnInit(){
    console.log("1. AppComponent>>>");
    firebase.initializeApp({
      apiKey: "AIzaSyAD8H28o0l1y1WgDnxwZVEbg0G-k8PSnb8",
      authDomain: "httpmodule-d9260.firebaseapp.com",

    })
  }
  title = 'app';

}
