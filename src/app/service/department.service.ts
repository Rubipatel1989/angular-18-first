import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http: HttpClient) { }
  apiUrl: String = "https://projectapi.gerasim.in/api/Complaint/";
  getAllDept() {
    return this.http.get(this.apiUrl + "GetParentDepartment");
  }
  saveNewDepartment(obj: any) {
    return this.http.post(`${this.apiUrl}AddNewDepartment`, obj);
  }
  upadteNewDepartment(obj: any) {
    return this.http.post(`${this.apiUrl}UpdateDepartment`, obj);
  }
  deleteDepartment(departmentId: number) {
    return this.http.delete(`${this.apiUrl}DeletedepartmentBydepartmentId?departmentId=` + departmentId);
  }

  addTwoNo(num1:number, num2:number){
    return num1 + num2;
  }
}
