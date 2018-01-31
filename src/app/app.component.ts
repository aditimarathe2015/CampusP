import { Component,isDevMode } from '@angular/core';
import {FormGroup,FormControl,Validator} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  
  ngOnInit(){
    // if(isDevMode()) {
    //   require("style-loader!assets/css/style1.css");
    // } else {
    //   require("style-loader!assets/css/style2.css");
    // }
  }
  myEvent(event) {
    

   // require("style-loader!assets/css/style2.css");
  }
  myEvent1(event) {


   // require("style-loader!assets/css/style1.css");
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
