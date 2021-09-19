import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormerEmployeeComponent} from './former-employee/former-employee.component'
import {EmployeeComponent} from './employee/employee.component'

const routes: Routes = [
{path:"employees/create",component:FormerEmployeeComponent},
{path:"employees/allEmployees",component:EmployeeComponent},
{path:"employees/update/:id",component:FormerEmployeeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [EmployeeComponent,FormerEmployeeComponent]
