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
  buttonColor: "#1e2023";
  Advanced: Boolean=false;
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
    this.quest="";
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
    buttonColor: "blue";
    this.quest=this.quest+value;
  }
  
  activatePopup() {
   
  }
  calculate(){
    if(this.Advanced==true)
    {
      this.frag=this.quest.split(")");//splitting function
      var Oouternum = this.frag[2];
      var outernum= this.frag[1];//getting second function/expression
      var Olength= outernum.length;
      var done=false;
      var f1=this.frag[0];
      var b1=f1.split(" ");
      var check=b1[1];
      var SHalfs=outernum.split(".");//splitting first half
      if(check!=null)
      {
        var c1=b1[0].split(".");
        var c2=c1[1];
        if(c2==check)
        {
           done=true;
          this.quest= outernum+" "+outernum;
        }
        else{
          done=true;
          this.quest= outernum+" "+check;
        }
      }
      if(done==false){
          if(SHalfs[1]!=""){
              var Sshalf=SHalfs[1];
              var Sfhalf=SHalfs[0];
              var DShalf=Sfhalf.split("λ");
              var DDShalf=DShalf[1];
              if(Oouternum=="")
              {
                Oouternum=outernum+")";
              }
              if(DDShalf==Sshalf){
                //this.quest=Oouternum;
                outernum=Oouternum;
              }
              else{
                // this.quest=Sshalf;
                outernum=Sshalf;
              }
              
              var innernum= this.frag[0];//getting first function/expression
              var Halfs=innernum.split(".");//splitting first half
              var Fshalf=Halfs[1];
              var Ffhalf=Halfs[0];
              var DFhalf=Ffhalf.split("λ");
              var DDFhalf=DFhalf[1];

              if((DDFhalf==Fshalf)&&(outernum!="")){
              // (λx.x) is true meaning anything comes in is bounded so it will come out
              
                // if(outernum[0]!=" "){
                //   this.quest=outernum[0];
                // }
                // else{
                  this.quest=outernum;
              // }
              }
              else{
                //(λx.x) is false meaning anything comes in is not bounded so it will display the other variable regardless
                this.quest=Fshalf;
              }
        }  
        if ((Olength==1) || (Olength==2)){
          outernum=SHalfs[0];
          var innernum= this.frag[0];//getting first function/expression
          var Halfs=innernum.split(".");//splitting first half
          var Fshalf=Halfs[1];
          var Ffhalf=Halfs[0];
          var DFhalf=Ffhalf.split("λ");
          var DDFhalf=DFhalf[1];

          if((DDFhalf==Fshalf)&&(outernum!="")){
              this.quest=outernum;
          }
          else{
            //(λx.x) is false meaning anything comes in is not bounded so it will display the other variable regardless
            this.quest=Fshalf;
          }
        }
      }
    }
    else{
      var cal;
      var cal1;
      var cal2;
      this.frag=this.quest.split(")");//splitting function
      var fHalf=this.frag[0];
      var sHalf=this.frag[1];
      var tHalf=this.frag[2];
      if(sHalf==""){
        var DFhalf=fHalf.split("(");
        var val = DFhalf[1];
        var Dval = val.split(" ");
        var opr = Dval[0];
        var val1 = parseInt(Dval[1]);
        var val2 = parseInt(Dval[2]); 
        switch(opr){
            case "+":
              cal= val1+val2;
            break;
            case "*":
              cal= val1*val2;
            break;
            case "-":
              cal= val1-val2;
            break;
            cal1=cal;
         }
        
          this.quest=cal;
      }
      else if((sHalf!="")&&(tHalf=="")){
          //first calculation

         var DFhalf=fHalf.split("(");
         var l = DFhalf[2];
         var func = l.split(" ");
         var op = func[0];
         var num1 = parseInt(func[1]);
         var num2 = parseInt(func[2]);
         switch(op){
              case "+":
                cal= num1+num2;
              break;
              case "*":
                cal= num1*num2;
              break;
              case "-":
                cal= num1-num2;
              break;
         } 
         // second calculation
          var DdFhalf=fHalf.split("(");
          var Oopr = DdFhalf[1];
          var newVal = parseInt(sHalf);
          switch(Oopr){
            case "+":
              cal1= newVal+cal;
            break;
            case "*":
              cal1= newVal*cal;
            break;
            case "-":
              cal1= cal-newVal;
            break;       
           }
         
          this.quest=cal1;
       }
       else if(tHalf!=""){
         //First calculation
         var fSec=fHalf.split("(");
         var first=fSec[3];
         var func = first.split(" ");
         var op = func[0];
         var num1 = parseInt(func[1]);
         var num2 = parseInt(func[2]);
         switch(op){
              case "+":
                cal= num1+num2;
              break;
              case "*":
                cal= num1*num2;
              break;
              case "-":
                cal= num1-num2;
              break;
         } 
         //Second calculation
         var sVal = parseInt(sHalf);
         var Sop=fSec[2];
         switch(Sop){
              case "+":
                cal1= cal+sVal;
              break;
              case "*":
                cal1= cal*sVal;
              break;
              case "-":
                cal1= cal-sVal;
              break;
          } 
         //Third calculation
         var fval=parseInt(tHalf);
         var top=fSec[1];
         switch(top){
              case "+":
                cal2= cal1+fval;
              break;
              case "*":
                cal2= cal1*fval;
              break;
              case "-":
                cal2= cal1-fval;
              break;
          } 
        
        this.quest=cal2;
      }
    }
    
  }
}
