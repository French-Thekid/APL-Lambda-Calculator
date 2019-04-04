import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-send',
  templateUrl: './send.page.html',
  styleUrls: ['./send.page.scss'],
})
export class SendPage implements OnInit {
  btncolor="clear";
  constructor(private router: Router) { }

  ngOnInit() {
  }

  back(){
    this.router.navigate(['home']);
  }

}
