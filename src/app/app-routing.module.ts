import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListEmployeeComponent } from './components/list-employee/list-employee.component';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';
import { DetailEmployeeComponent } from './components/detail-employee/detail-employee.component';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';


const routes: Routes = [

  { path: "", redirectTo: "employees", pathMatch: "full" },
  { path: "employees", component: ListEmployeeComponent },
  { path: "update/:employeeId", component: UpdateEmployeeComponent },
  { path: "detail/:employeeId", component: DetailEmployeeComponent },
  { path: "add", component: CreateEmployeeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
