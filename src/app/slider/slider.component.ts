import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { slidercontent } from '../slidercontent';
import { Country } from '../country';
declare var $: any;
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  contents: slidercontent[];
  countries: Country[];
  constructor(private _dataService:StudentService) { 
    this.countries = this._dataService.getCountries();
   
  //  this.contents = this._dataService.getSliderContents();
    console.log(this.contents);
   }

  ngOnInit() {

    
    $('.carousel .vertical .item').each(function(){
      var next = $(this).next();
      if (!next.length) {
        next = $(this).siblings(':first');
      }
      next.children(':first-child').clone().appendTo($(this));
      
      for (var i=1;i<2;i++) {
        next=next.next();
        if (!next.length) {
          next = $(this).siblings(':first');
        }
        
        next.children(':first-child').clone().appendTo($(this));
      }
    });

}
}
