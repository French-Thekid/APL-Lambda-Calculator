import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recieve',
  templateUrl: './recieve.page.html',
  styleUrls: ['./recieve.page.scss'],
})
export class RecievePage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  back(){
    this.router.navigate(['home']);
  }
}
