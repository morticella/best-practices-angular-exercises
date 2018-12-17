import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'courseproject';
  loadedFeature = 'recipe';
  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyB-GuFSfF6AvuX2pCMbVt9Sq1fxcr1BbRs",
      authDomain: "ng-recepi-book-c3c7a.firebaseapp.com"
    });
  }
}
