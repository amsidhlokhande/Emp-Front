import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { EmployeeService } from 'src/app/services/employee.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/models/employee';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  employeeForm: FormGroup;
  formSubmitted: boolean = false;

  constructor(private employeeService: EmployeeService, private formBuilder: FormBuilder, private router: Router, private activateRoute: ActivatedRoute) {
    console.log('Update employeeForm!!!!');
    this.employeeForm = this.formBuilder.group({
      empId: new FormControl("", [Validators.required]),
      empName: new FormControl("", Validators.compose([Validators.required, Validators.minLength(3)])),
      companyName: new FormControl("", Validators.compose([Validators.required, Validators.minLength(3)])),
      mobileNumber: new FormControl(""),
      emailId: new FormControl("", Validators.compose([Validators.required, Validators.email])),
      address: new FormControl("")
    });
  }

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe(params => {
      let employeeId = parseInt(params.get('employeeId'));
      this.employeeByEmployeeId(employeeId).subscribe(employeeData => {
        this.employeeForm.setValue({
          empId: employeeData.empId,
          empName: employeeData.empName,
          mobileNumber: employeeData.mobileNumber,
          emailId: employeeData.emailId,
          companyName: employeeData.companyName,
          address: employeeData.address
        })
      }, error => {
        console.log(error);
      })
    });

  }

  private employeeByEmployeeId(employeeId: number): Observable<Employee> {
    return this.employeeService.getEmployeeByEmployeeId(employeeId);
  }

  public submitEmployee() {
    this.formSubmitted = true;
    this.updateEmployee();
  }

  private updateEmployee() {
    this.employeeService.updateEmployee(this.employeeForm.value).subscribe(
      data => {
        console.log(data);
        this.employeeList();
      },
      error => {
        console.log(error);
      }
    );
  }

  private employeeList() {
    this.router.navigate(["/employees"]);
  }

  public backToEmployeeList() {
    this.employeeList();
  }
}
