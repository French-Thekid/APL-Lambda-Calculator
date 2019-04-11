import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { UserService } from '../user.service';
import { AngularFirestore } from '@angular/fire/firestore'


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss']
})
export class RegisterPage implements OnInit {
  username: string = '';
  password1: string = '';
  password: string = '';

  constructor(
    public router: Router,
    public afAuth: AngularFireAuth,
    public afStore: AngularFirestore,
    public user: UserService,
    private alertController: AlertController,
  ) {}

  ngOnInit() {}

  async register() {
    try {
      if((this.password=="")||(this.password1==""))
      {
        const alert = await this.alertController.create({
          header: 'Warning',
          subHeader: 'Form Incomplete',
          message: 'Please ensure all fields are filled.',
          buttons: ['ok']
        });
        await alert.present();
      }
      else{
        if(this.password==this.password1)
        {
          const {username,password} = this;
          try{
            const res = await this.afAuth.auth.createUserWithEmailAndPassword(username + '@gmail.com',password);
            console.log(res);

            this.afStore.doc(`users/${res.user.uid}`).set({username});

            if(res.user){
              this.user.setUser({username,uid: res.user.uid})
            }
            const alert = await this.alertController.create({
              header: 'French Pop-Up',
              subHeader: 'Registration Successful',
              message: 'Please login.',
              buttons: ['ok']
            });
            await alert.present();
            this.router.navigate(['login']);
          }
          catch(error){
            console.dir(error);
            if(error.code==="auth/weak-password"){
              const alert = await this.alertController.create({
                header: 'Warning',
                subHeader: 'Weak Password',
                message: 'Please try creating a stronger password.',
                buttons: ['ok']
              });
              await alert.present();
            }
          }
        }
        else{
            this.router.navigate(['register']);
              const alert = await this.alertController.create({
                header: 'Warning',
                subHeader: 'Password Mismatch',
                message: 'Please ensure both passwords match.',
                buttons: ['ok']
              });
              await alert.present();
        }
      }
    } catch (error) {
      console.dir(error);
    }

  }
  back(){
    this.router.navigate(['login']);
  }
}
