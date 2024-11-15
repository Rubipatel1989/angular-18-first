import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-api',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.css'
})
export class PostApiComponent implements OnInit {
  departmentList: any[] = [];

  deptObj: any = {
    "departmentId": 0,
    "departmentName": "",
    "departmentLogo": ""
  }
  http = inject(HttpClient);
  ngOnInit(): void {
    this.getDepartment();
  }
  onSave() {
    this.http.post("https://projectapi.gerasim.in/api/Complaint/AddNewDepartment", this.deptObj).subscribe((result: any) => {
      if (result.result) {
        console.log('Success');
        this.getDepartment();
      } else {
        alert(result.message);
        console.log('Fail');
      }
    })
  }

  getDepartment() {
    this.http.get("https://projectapi.gerasim.in/api/Complaint/GetParentDepartment", this.deptObj).subscribe((result: any) => {
      if (result.result) {
        this.departmentList = result.data;
        console.log(this.departmentList);
      } else {
        alert(result.message);
        console.log('Fail');
      }
    })
  }
}
