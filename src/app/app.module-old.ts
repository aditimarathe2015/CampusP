import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule,Http } from '@angular/http';
import{StudentService} from './student.service';
import{RouterModule} from '@angular/router';
// import { FormsModule } from '@angular/Forms';

import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { EmployeeComponent } from './employee/employee.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { NavigationComponent } from './navigation/navigation.component';
import { StudentsListComponent } from './students-list/students-list.component';
import {routes} from './app.route';

import { UpdatestudentComponent } from './updatestudent/updatestudent.component';
import { DetailsComponent } from './details/details.component'

import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';

// import {HttpClientModule,HttpClient} from '@angular/common/http'
@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    EmployeeComponent,
    NotFoundComponent,
    LoginPageComponent,
    DashbordComponent,
    NavigationComponent,
    StudentsListComponent,
 
    UpdatestudentComponent,
 
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    // FormsModule,
    HttpModule,
   // HttpClient,
   BsDatepickerModule,
   
    RouterModule.forRoot(routes)
  
  ],
  providers: [StudentService,AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
