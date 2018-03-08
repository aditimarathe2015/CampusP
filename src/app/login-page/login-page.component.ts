import { Component, OnInit } from '@angular/core';

declare var require: any;

declare var $: any;

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  
  ColorGroup;
  showSelected : boolean;
  ShowButton_change:boolean;
  Hidebutton_change:boolean;

  GetColorRed()
  {
    
    require("style-loader!assets/css/style1.css");
  }
  GetColorGreen()
  { 
   
    require("style-loader!assets/css/style2.css");
  }
  GetColorYellow()
  {
    require("style-loader!assets/css/style3.css");
  }

  public show:boolean = false;
  public buttonName:any = 'Show';

  toggle() {
    this.show = !this.show;

    // CHANGE THE NAME OF THE BUTTON.
    if(this.show)  
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
  }
  constructor(){
      this.showSelected = false;     
      this.Hidebutton_change=false;
      this.ShowButton_change=true;
  }
  ShowButton(){
    this.Hidebutton_change=true;
      this.showSelected = true;
      this.ShowButton_change=false;
  }
  HideButton(){
    this.Hidebutton_change=false;
      this.showSelected = false;
      this.ShowButton_change=true;
  }
 upload(){

 }
 ngOnInit() {
  this.ColorGroup=null;
  this.onSelect(event);

  $('button').click(function(){
alert("hi")
  });

}
  onSelect(event)

  {
 
 
    if  (event=="Red")
    {
      
      require("style-loader!assets/css/style1.css");
   
    }
    else if  (event=="Green")
    {
      require("style-loader!assets/css/style2.css");
   
    }
   else if  (event=="Yellow")
  {
      require("style-loader!assets/css/style3.css");
    
    }
   
  }
 

}
