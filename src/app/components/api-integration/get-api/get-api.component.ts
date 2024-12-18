import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AlertComponent } from '../../../reusableComponent/alert/alert.component';
import { MyButtonComponent } from "../../../reusableComponent/my-button/my-button.component";
import { Customer } from '../../../model/class/Customer';
import { IUser } from '../../../model/interface/IUser';

@Component({
  selector: 'app-get-api',
  standalone: true,
  imports: [AlertComponent, MyButtonComponent],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css'
})
export class GetApiComponent {
  userList: IUser[] = [];
  customerList: Customer[] = [];
  alertMsg: String = 'This is Dummy Data';
  constructor(private http: HttpClient) {
    //this.getAllUser();
  }

  getAllUser() {
    //debugger;
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((result: any) => {
      //debugger;
      this.userList = result;
    });
  }

  getAllCustomer() {
    //debugger;
    this.http.get("https://projectapi.gerasim.in/api/RealEstate/GetAllCustomers").subscribe((result: any) => {
      //debugger;
      this.customerList = result.data;
      console.log('Kumar', this.customerList);
    }, error => {
      //debugger;
    });
  }
  changeMsg() {
    this.alertMsg = 'This is Get API'
  }
}
