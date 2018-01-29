import { Injectable } from '@angular/core';
import {BehaviorSubject} from  'rxjs/BehaviorSubject';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import{Observable} from 'rxjs/Observable';
import { IStudents } from './students-list/students';
import {Http,Response, Headers,HttpModule} from '@angular/http';
import { Country } from './country'; 
import { State  } from './state';   
import {city} from './city';

import 'rxjs/add/Observable/throw';

import 'rxjs/add/operator/catch';

import 'rxjs/add/operator/do';


@Injectable()

export class StudentService {
  selectedCountry: Country = new Country(0, 'India');  
  constructor(private http:Http){}
  getCountries() {
    return [
     new Country(1, 'USA' ),
     new Country(2, 'India' ),
     new Country(3, 'Australia' )
    ];
  }
  
  getStates() {
   return [
     new State(1, 1, 'Arizona' ),
     new State(2, 1, 'Alaska' ),
     new State(3, 1, 'Florida'),
     new State(4, 1, 'Hawaii'),
     new State(5, 2, 'Gujarat' ),
     new State(6, 2, 'Goa'),
     new State(7, 2, 'Punjab' ),
     new State(8, 3, 'Queensland' ),
     new State(9, 3, 'South Australia' ),
     new State(10, 3, 'Tasmania')
    ];
  }
  getCity() {
    return [
      new city(1, 1, 'aaa' ),
      new city(2, 1, 'aaaaaa' ),
      new city(3, 1, 'aaaaaaaa'),
      new city(4, 1, 'aaaaaaaaa'),
      new city(5, 2, 'bbbb' ),
      new city(6, 2, 'bbbbbbb'),
      new city(7, 2, 'bbbbbbbb' ),
      new city(8, 3, 'ccccccc' ),
      new city(9, 3, 'cccccccccc' ),
      new city(10, 3, 'ccccccccccc'),
      new city(1, 4, 'aaa' ),
      new city(2, 4, 'aaaaaa' ),
      new city(3, 5, 'aaaaaaaa'),
      new city(4, 5, 'aaaaaaaaa'),
      new city(5, 6, 'bbbb' ),
      new city(6, 6, 'bbbbbbb'),
      new city(7, 6, 'bbbbbbbb' ),
      new city(8, 7, 'ccccccc' ),
      new city(9, 8, 'cccccccccc' ),
      new city(10, 8, 'ccccccccccc')
     ];
   }
  

  Students:any[];
  getdata(){
 
    this.http.get("http://localhost:2403/students").subscribe(
      (res:Response)=>{ this. Students = res.json();
   //   console.log(this. Students);
      }
      )
    } 

  ///constructor(private _http:HttpClient) { }

  cars=[

    'ford','chprlate','alto'
  ];
  mydata(){
    return 'this is my data';
  }
  //getProducts():Observable<IStudents[]>{
    //return this._http.get<IStudents[]>(this._studentsURL).do(data=>console.log("All data",JSON.stringify(data)))
   // .catch(this.handelerror);
   
      
   // }



    private handelerror(err:HttpErrorResponse)
    {
      console.log(err.message);
      return Observable.throw(err.message)
    }
    
// private goals= new BehaviorSubject<any>(['Thne aniltal goal','getting data']) ;
// goal= this.goals.asObservable();


  
changeGoal(goal)
{
 //this.goals.next (goal);
}
}
