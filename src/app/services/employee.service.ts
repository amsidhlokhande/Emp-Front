import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from '../models/employee';
import { Observable } from 'rxjs';

const BASE_URL="http://localhost:8484/employees";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  httpHeaders:HttpHeaders= new HttpHeaders({
    "Content-Type": "application/json"
  });

  constructor(private httpClient:HttpClient) { }

  public getAllEmployees(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>( BASE_URL, { headers: this.httpHeaders } );
  }

  public getEmployeeByEmployeeId( employeeId: number ): Observable<Employee> {
    return this.httpClient.get<Employee>( BASE_URL + "/" + employeeId, { headers: this.httpHeaders } );
  }

  public saveEmployee( employee: Employee ): Observable<Employee> {
    return this.httpClient.post<Employee>( BASE_URL,employee, { headers: this.httpHeaders } );
  }

  public updateEmployee( employee: Employee ): Observable<void> {
    return this.httpClient.put<void>(BASE_URL + "/" + employee.empId, employee, { headers: this.httpHeaders } );
  }

  public deleteEmployee( employeeId: number ): Observable<string> {
    return this.httpClient.delete<string>( BASE_URL + "/" + employeeId, { headers: this.httpHeaders, responseType: "text" as "json" } );
  }

}
