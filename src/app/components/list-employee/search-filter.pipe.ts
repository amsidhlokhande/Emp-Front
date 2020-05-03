import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class SearchFilterPipe implements PipeTransform {

  transform(employees: any[], searchText: string): any[] {
    if (!employees) return [];
    if (!searchText) return employees;
    let lowerCaseSearchText = searchText.toLocaleLowerCase();
    return employees.filter(employee =>
      employee.empName.toLocaleLowerCase().includes(lowerCaseSearchText) ||
      employee.emailId.toLocaleLowerCase().includes(lowerCaseSearchText) ||
      employee.companyName.toLocaleLowerCase().includes(lowerCaseSearchText) ||
      employee.address.toLocaleLowerCase().includes(lowerCaseSearchText) /*||
      employee.mobileNumber.includes(searchText) ||
      employee.empId.includes(searchText)*/

    );
  }

}
