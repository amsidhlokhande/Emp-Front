import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/models/employee';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employeeForm: FormGroup;
  formSubmitted: boolean = false;
  message: string;

  constructor(private employeeService: EmployeeService, private formBuilder: FormBuilder, private router: Router) {
    console.log('Creating employeeForm!!!!');
    this.employeeForm = this.formBuilder.group({
      empId: new FormControl('', [Validators.required]),
      empName: new FormControl('', Validators.compose([Validators.required, Validators.minLength(3)])),
      companyName: new FormControl('', Validators.compose([Validators.required, Validators.minLength(3)])),
      mobileNumber: new FormControl(''),
      emailId: new FormControl('', Validators.compose([Validators.required, Validators.email])),
      address: new FormControl('')
    });
  }

  ngOnInit(): void {
    this.message = null;
    this.formSubmitted = false;
  }

  public submitEmployee() {
    this.formSubmitted = true;
    this.postEmployee( this.employeeForm.value ).subscribe(
      data => {
        console.log( data );
        this.message = "Employee saved successfully!!!";
        this.employeeForm.reset();
        this.loadEmployee();
      }, error => console.log( error )
    );

  }


  //Web API POST call
  private postEmployee( employee: Employee ): Observable<Employee> {
    return this.employeeService.saveEmployee( employee );
  }

  private loadEmployee() {
    this.router.navigate( [ "/employees" ] );
  }

  public resetForm() {
    this.employeeForm.reset();
    this.formSubmitted = false;
    this.message = null;
    this.loadEmployee();
  }

}
