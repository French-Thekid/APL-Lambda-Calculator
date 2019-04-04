import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  constructor(public router:Router, private platform: Platform){};
  send(){
    this.router.navigate(['send']);
  }
  recieve(){
    this.router.navigate(['recieve']);
  }
  lambda(){
    this.router.navigate(['lambda']);
  }
  about(){
    this.router.navigate(['about']);
  }
  quit(){
    //this.platform.exitApp();
  }
}
