import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { AlertController } from '@ionic/angular';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username:string="";
  Password:string="";
  username1: string="";
  constructor(public user:UserService,private alertController: AlertController, public afAuth: AngularFireAuth, private router: Router) { }

  ngOnInit() {
  }

  login(){
      // all cool
   
      this.router.navigate(['home'])
          username: this.username
  }
  
 

  async openPortal(){
    const {username,Password} =this;
    try{
      if((username=="")||(Password=="")){
        const alert = await this.alertController.create({
          header: 'Warning',
          subHeader: 'Credentials Incomplete',
          message: 'Please ensure all fields are filled.',
          buttons: ['ok']
        });
        await alert.present();
      }
      else{
        const res= await this.afAuth.auth.signInWithEmailAndPassword(username + '@gmail.com',Password);
        if(res.user){
          this.user.setUser({username,uid: res.user.uid})
        }
        this.router.navigate(['home']);
      }
      
    }
    catch(err){
      console.dir(err);
      if(err.code==="auth/user-not-found"){
        const alert = await this.alertController.create({
          header: 'Warning',
          subHeader: 'User Not Found',
          message: 'Please check your credentials.',
          buttons: ['ok']
        });
        await alert.present();
      }
      if(err.code==="auth/wrong-password"){
        const alert = await this.alertController.create({
          header: 'Warning',
          subHeader: 'Wrong Password',
          message: 'Please check your credentials.',
          buttons: ['ok']
        });
        await alert.present();
      }
    }
   
  }
}
