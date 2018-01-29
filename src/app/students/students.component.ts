import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import { StudentService } from '../student.service';
import {Http,Response, Headers,HttpModule} from '@angular/http';
import { resetFakeAsyncZone } from '@angular/core/testing';
import { Country } from '../country'; 
import { State  } from '../state';   
import { city } from '../city';
import{FormGroup,FormControl,Validator} from '@angular/forms';

@Component({

  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
  providers: [StudentService]
})
export class StudentsComponent implements OnInit {
  confirmationString:string ="Student Added ";
  
  data:object =[];
  goals:any;
  categeory :any[];
  countries: Country[];
  states: State[];
  cities: city[];
  country:any;
  mySelect:any;
//***Variable for dropdown place holder ... */
  gender;
    semister;
    status;
    bloodGroup;
    categeory1;
    country1;
  constructor(private route : ActivatedRoute,private _http:Http, private router:Router,private _dataService:StudentService) { 
 
     this.route.params.subscribe(res=>console.log(res.id));
     //this.mySelect = -1;
     this.countries = this._dataService.getCountries();
   
    this.country=this._dataService.selectedCountry;
    // 
   }
  
   isAdded:boolean=false;
   studentsObj:Object = {};

   //***********Add Student ********** */
   AddnewStudents=function(studentsData){

    this.studentsObj={
      "StudentsName":studentsData.StudentsName,
      "Gender":studentsData.Gender,
      "registrationNumber":studentsData.registrationNumber,
      "roomNumber":studentsData.roomNumber,
      "Semister":studentsData.Semister,
      "bloodGroup":studentsData.bloodGroup,
      "DOB":studentsData.DOB,
      "Nationality":studentsData.Nationality,
      "Marritalstatus":studentsData.Marritalstatus,
      "Categeory":studentsData.Categeory

     }
   
     
      this._http.post('http://localhost:2403/students',this.studentsObj)
      .subscribe((res:Response)=>[console.log(res)],this.isAdded=true)
      if  (this.isAdded=true){
        this.router.navigate(['/dashboard/StudentList']);
      }
     
   }
   //*******Categeory Dropdown List *********** */
   getcategeory(){
 
    this._http.get("http://localhost:2403/categeory").subscribe(
      (res:Response)=>{ this. categeory = res.json();
   //    console.log(this. categeory);
      }
      )
    }


    onSelect(countryid) {
   
      this.states = this._dataService.getStates().filter((item)=> item.countryid == countryid);
    }
   

onSelectCity(stateid) {
   
      this.cities = this._dataService.getCity().filter((item)=> item.stateid == stateid);
    }
    form;

  ngOnInit() {
this.categeory1=null;
this.country1=null;
    this.bloodGroup=null;
    this.semister=null;
    this.status=null;
   this. gender = null;
    this.mySelect = -1;
   
    this.getcategeory();
 
  }

sendmeHome(){
 this.router.navigate([''])
}
}
