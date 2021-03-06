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
import {NgDatepickerModule} from 'ng2-datepicker';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import { SliderComponent } from './slider/slider.component';
import {ToastsManager} from 'ng2-toastr/ng2-toastr';
import { ToastModule } from "ng2-toastr/src/toast.module";
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
 
    DetailsComponent,
 
    SliderComponent
  ],
  imports: [
    BrowserModule,
    BsDatepickerModule.forRoot(),
   // ToastModule.forRoot(),
    // FormsModule,
    HttpModule,
   // HttpClient,
   NgDatepickerModule,
  // BsDatepickerModule,
    RouterModule.forRoot(routes),
    ToastModule.forRoot()
  
  ],
  providers: [StudentService,AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
