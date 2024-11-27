import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-get-api',
  standalone: true,
  imports: [],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css'
})
export class GetApiComponent {
  userList: any[] = [];
  customerList: any[] = [];
  constructor(private http: HttpClient) {
    //this.getAllUser();
  }

  getAllUser() {
    //debugger;
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((result: any) => {
      //debugger;
      this.userList = result;
      console.log('Pawan', this.userList);
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
}