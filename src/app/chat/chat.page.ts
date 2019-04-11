import { Component } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { UserService } from '../user.service';
import { Observable,Subscribable } from 'rxjs';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { firestore } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

//@IonicPage()
@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
})
export class ChatPage {

  username: string = '';
  message: string = '';
  
  _chatSubscription;
  messages: object[] = [];

  constructor(public db: AngularFireDatabase,public router:Router,
    public navCtrl: NavController, public navParams: NavParams) {
      // this.username = this.navParams.get('username');
      // this._chatSubscription = this.db.list('/chat').valueChanges().subscribe( data => {
      //      this.messages =  data;
      //   });
    }

    back(){
      this.router.navigate(['home']);
    }

    // sendMessage() {
    //   this.db.list('/chat').push({
    //     username: this.username,
    //     message: this.message
    //   }).then( () => {
    //     // message is sent
    //   }).catch( () => {
    //     // some error. maybe firebase is unreachable
    //   });
    //   this.message = '';
    // }

    // ionViewDidLoad() {
    //   this.db.list('/chat').push({
    //     specialMessage: true,
    //     message: `${this.username} has joined the room`
    //   });
    // }

    // ionViewWillLeave(){
    //   this._chatSubscription.unsubscribe();
    //   this.db.list('/chat').push({
    //     specialMessage: true,
    //     message: `${this.username} has left the room`
    //   });
    // }
  }
