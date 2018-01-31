import { Component, OnInit } from '@angular/core';
declare var require: any;
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor() { }
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
  ngOnInit() {
  }

}
