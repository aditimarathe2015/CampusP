import { Component, OnInit } from '@angular/core';
import {Http,Response ,Headers} from '@angular/http';
import{ActivatedRoute,Router} from '@angular/router';
import 'rxjs/add/operator/toPromise';
import { identifierModuleUrl } from '@angular/compiler';
@Component({
  selector: 'app-updatestudent',
  templateUrl: './updatestudent.component.html',
  styleUrls: ['./updatestudent.component.css']
})
export class UpdatestudentComponent implements OnInit {

updateid:number;
data:object =[];
students=[];
studentObj:object=[];
categeory:any[];
private headers =new  Headers({'content-type':'application/json'});
private sub: any;
  id:any='';
  studentsObj:any ;
  constructor(private router:Router ,private route:ActivatedRoute, private http:Http) {

    // this.route.params.subscribe(res=>console.log(res.id))
   }

   //***Update Students************ */
  UpdateStudents(studentsData){

     const URL=`${"http://localhost:2403/students"}/${this.id}`;
    this.http.put(URL,JSON.stringify(studentsData),{headers:this.headers}).toPromise()
    .then(()=>{
      this.router.navigate(['/dashboard/StudentList']);
    })
  }

  //*****Get Categeory  ********** */
  getcategeory(){
 
    this.http.get("http://localhost:2403/categeory").subscribe(
      (res:Response)=>{ this. categeory = res.json();
      //  console.log(this. categeory);
      }
      )
    }

  ngOnInit() {
    // this.route.params.subscribe(res=>console.log(res.id));
     
    
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];

      this.getcategeory();
  
});


     this.http.get("http://localhost:2403/students/"+this.id).subscribe(
       (res:Response)=>
      { this.data = res.json();
          console.log(this. data);
  
       }
       )

  }

  

}
