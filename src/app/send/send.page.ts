import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { AngularFirestore } from '@angular/fire/firestore';
import { user, UserService } from '../user.service';

import { AngularFireDatabase } from 'angularfire2/database';
import { SMS } from '@ionic-native/sms/ngx';
import { text } from '@angular/core/src/render3';
import { CallNumber } from '@ionic-native/call-number/ngx';


@Component({
  selector: 'app-send',
  templateUrl: './send.page.html',
  styleUrls: ['./send.page.scss'],
})
export class SendPage implements OnInit {
  // Messages: user[];
  // text: string;
  // username: string="";
   s:any;
  // messages: object[] =[];

  username: string = '';
  message: string = '';
  _chatSubscription;
  text:string="";
  number:string="";

  btncolor="clear";
  constructor(private router: Router,
              public db: AngularFireDatabase,
              public afStore:AngularFirestore,
              public user: UserService,
              private callNumber: CallNumber,
              private sms: SMS
              ) { }

  ngOnInit() {
   
  }
  call() {
      this.callNumber.callNumber(this.number, true);
  }
  back(){
    this.router.navigate(['home']);
  }
  send(){
      this.message=this.text;
      this.sms.send(this.number,this.text);
   }
  //   try{
  //     this.afStore.doc(`chats/${this.user.getUID()}`).update({
  //       posts: firestore.FieldValue.arrayUnion({

  //         texts
  //       })
  //     }).then( () => {

  //     }).catch( () => {
  //         console.dir();
  //     })
  //   }
  //   catch(E){
  //     console.dir(E);
  //   }
   
  //   this.username="";
  // }

}

