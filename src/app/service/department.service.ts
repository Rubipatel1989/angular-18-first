import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constant } from '../constant/Constant';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http: HttpClient) { }

  public onRoleChange$: Subject<string> = new Subject<string>;

  getAllDept() {
    return this.http.get(Constant.API_URL + Constant.DEPARTMENT_METHODS.GET_PARENT_DEPARTMENT);
  }
  saveNewDepartment(obj: any) {
    return this.http.post(`${Constant.API_URL}${Constant.DEPARTMENT_METHODS.ADD_NEW_DEPARTMENT}`, obj);
  }
  upadteNewDepartment(obj: any) {
    return this.http.post(`${Constant.API_URL}${Constant.DEPARTMENT_METHODS.UPDATE_DEPARTMENT}`, obj);
  }
  deleteDepartment(departmentId: number) {
    return this.http.delete(`${Constant.API_URL}DeletedepartmentBydepartmentId?departmentId=` + departmentId);
  }

  addTwoNo(num1: number, num2: number) {
    return num1 + num2;
  }
}
