import { Component, OnInit } from '@angular/core';
 import {Http,Response, Headers,HttpModule} from '@angular/http';
import {HttpErrorResponse} from '@angular/common/http'

//import {Http,Response} from '@angular/http';
import { StudentService } from '../student.service';
import { IStudents } from './students';
import { debug } from 'util';
import 'rxjs/add/operator/toPromise';
@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent  {
  studentsdata: string;
  someproperty:string;
 // constructor(private _http:HttpClient,private _resellerService :StudentService,private http:Http){}
 
 constructor(private http:Http){}

 id:number;
 private headers =new  Headers({'content-type':'application/json'});
 
 filterProducts: IStudents[];
  ProductTitle:string ="Seller List2 ...";
  Students :any[];
  categeory:any[]
  
  errorMessage :string;
deleteStudents=function(id){
  if(confirm('Are you Sure')){
  const URL=`${"http://localhost:2403/students"}/${id}`;
  return this.http.delete(URL,{headers :this.headers}).toPromise().then(()=>{
    this.getdata();
  })

  }
}

  getdata(){
 
    this.http.get("http://localhost:2403/students").subscribe(
      (res:Response)=>{ this. Students = res.json();
      // console.log(this. Students);
      }
      )
    }

    getcategeory(){
 
      this.http.get("http://localhost:2403/categeory").subscribe(
        (res:Response)=>{ this. categeory = res.json();
       //  console.log(this. categeory);
        }
        )
      }

   
 
  ngOnInit() {
  this.getdata();
    //var data =this._resellerService.getProducts().subscribe(Students=>{this.Students, this.filterProducts=this.Students;}
     // ,Error=>this.errorMessage=<any>Error);

     // console.log(this._resellerService.cars);
      //this.someproperty=this._resellerService.mydata();
      
   }

}
