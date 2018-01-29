import{RouterModule,Routes} from '@angular/router';

import { StudentsComponent } from './students/students.component';
import { EmployeeComponent } from './employee/employee.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { NavigationComponent } from './navigation/navigation.component';
import { StudentsListComponent } from './students-list/students-list.component';
import { AppComponent } from './app.component';
import { UpdatestudentComponent } from './updatestudent/updatestudent.component'
import { DetailsComponent } from './details/details.component';

export const routes:Routes=[
  
//   { path: '', component: LoginPageComponent },
//   { path: '', redirectTo: 'dashbord', pathMatch: 'full' },
//  { path: 'dashboard', component: DashbordComponent },
//  { path: 'Employee', component: EmployeeComponent },
//  { path:'updatestudent/:id', component:UpdatestudentComponent },
//   { path: 'StudentList', component: StudentsListComponent},

//  { path: 'Students', component: StudentsComponent },

 {
    path: '',
    component: LoginPageComponent
},
{
    path: 'dashboard', component: DetailsComponent,
    children: [
          { path: '', component: DashbordComponent},
          {path: 'Employee', component: EmployeeComponent},
          { path: 'Students', component: StudentsComponent},
          { path: 'StudentList', component: StudentsListComponent},
          { path:'updatestudent/:id', component:UpdatestudentComponent }
             ]
  },

    {
      path:'**',
      component:NotFoundComponent
    },
     
   
 ];
 
 
