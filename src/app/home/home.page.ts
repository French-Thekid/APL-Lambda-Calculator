import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  btncolor="clear";
  constructor(public router:Router,private platform: Platform){};
  back(){
    this.router.navigate(['login']);
  }
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
    // this.platform.backButton.subscribe(()=>{
    //   console.log ('exit');
    //   navigator['app'].exitApp();
    // })

    //this.appMinimize.minimize();
    this.router.navigate(['login']);
   // this.router.dispose();
   // navigator.app.exitApp(). //Exit from app
  }
 
}
