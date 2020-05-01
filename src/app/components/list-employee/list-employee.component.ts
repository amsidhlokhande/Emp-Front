import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/models/employee';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {

  employees: Observable<Employee[]>;

  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit(): void {
    this.loadEmployees();
  }

  public loadEmployees() {
    console.log("Loading employees in ListEmployeeComponent");
    this.employees = this.employeeService.getAllEmployees();
    this.router.navigate( [ '/employees' ] );
  }

  //detele Employee
  public deleteEmployee( employeeId: number ) {
    console.log( "Inside deleteEmployee with employeeId " + employeeId );
    this.employeeService.deleteEmployee( employeeId ).subscribe(
      response => {
        console.log( response );
        this.loadEmployees();
      },
      error => console.log( error ) );
  }

  //update Employee
  public updateEmployee( employeeId: number ) {
    this.router.navigate(["update" , employeeId]);
  }

  //details Employee
  public detailEmployee( employeeId: number ) {
    this.router.navigate( [ 'detail', employeeId ] );
  }

}
