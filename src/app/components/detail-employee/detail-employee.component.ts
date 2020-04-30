import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/models/employee';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-detail-employee',
  templateUrl: './detail-employee.component.html',
  styleUrls: ['./detail-employee.component.css']
})
export class DetailEmployeeComponent implements OnInit {

  employee: Observable<Employee>;
  constructor ( private employeeService: EmployeeService, private router: Router, private activatedRoute: ActivatedRoute ) { }


  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe( params => {
      let employeeId = parseInt( params.get( 'employeeId' ) );
      this.employee = this.employeeService.getEmployeeByEmployeeId( employeeId );
    } );
  }


  list() {
    this.router.navigate( [ '/employees' ] );
  }
}
