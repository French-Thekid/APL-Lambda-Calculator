import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { isArray } from 'util';
import { validateConfig } from '@angular/router/src/config';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-lambda',
  templateUrl: './lambda.page.html',
  styleUrls: ['./lambda.page.scss'],
})
export class LambdaPage implements OnInit {
  bOpen:string;
  bClose:string;
  lambda:string;
  operators:any;
  quest:any="";
  frag:any;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  back(){
    this.router.navigate(['home']);
  }
  value(value:string){
    if(value=="del")
    {
      this.quest="";
    }
    else{
      this.quest=this.quest+value;
    }
  }
  operator(value:any){
    this.quest=this.quest+value;
  }

  calculate(){
    this.frag=this.quest.split(")");//splitting function
    var outernum= this.frag[1];//getting second function/expression
    var innernum= this.frag[0];//getting first function/expression
    var Halfs=innernum.split(".");//splitting first half
    var Ffhalf=Halfs[0];
    var DFhalf=Ffhalf.split("λ");

    this.quest=Ffhalf;
    /*
    if(outernum[0]!=" "){
      this.quest=outernum[0];
    }
    else{
      this.quest=outernum[1];
    }
    */
    //var t = "12:10:36";var tArr = t.split(":");var hour = tArr[0];var minute = tArr[1];var second = tArr[2];
    //this.quest=tArr[0];

    
    

  }
}
