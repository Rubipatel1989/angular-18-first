import { CommonModule, JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import gsap from 'gsap';
import { DepartmentService } from '../../../service/department.service';
import { AlertComponent } from '../../../reusableComponent/alert/alert.component';
import { MyButtonComponent } from "../../../reusableComponent/my-button/my-button.component";
import { Department, IDepartmentList } from '../../../model/class/Customer';
@Component({
  selector: 'app-post-api',
  standalone: true,
  imports: [FormsModule, CommonModule, AlertComponent, MyButtonComponent],
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.css'
})
export class PostApiComponent implements OnInit {
  departmentList: IDepartmentList[] = [];

  deptObj: Department = new Department();
  http = inject(HttpClient);

  constructor(private deptSrv: DepartmentService) {
    const result = this.deptSrv.addTwoNo(1, 2);
    console.log('Pawan', result);
  }

  ngOnInit(): void {
    this.getDepartment();
  }
  getData(data: any) {
    console.log(data);
  }
  onEdit(data: any) {
    this.deptObj = { ...data };
    this.animateRow(data.departmentId, 'edit');
  }

  onSave() {
    this.deptSrv.saveNewDepartment(this.deptObj).subscribe((result: any) => {
      if (result.result) {
        console.log('Success');
        this.getDepartment();
        this.animateGridEffect('add');
      } else {
        alert(result.message);
        console.log('Fail');
      }
    })
  }

  onUpdate() {
    this.deptSrv.upadteNewDepartment(this.deptObj).subscribe((result: any) => {
      if (result.result) {
        this.getDepartment();
        this.animateGridEffect('update'); // Animate after updating
      } else {
        alert(result.message);
        console.log('Fail');
      }
    });
  }
  onDelete(departmentId: number) {
    const confirmation = confirm('Are you sure you want to delete this department?');
    if (confirmation) {
      this.deptSrv.deleteDepartment(departmentId).subscribe((result: any) => {
        if (result.result) {
          this.getDepartment();
          this.animateRow(departmentId, 'delete'); // Animate before fetching updated list
          setTimeout(() => this.getDepartment(), 500);
        } else {
          alert(result.message);
          console.log('Fail');
        }
      });
    }
  }


  getDepartment() {
    this.deptSrv.getAllDept().subscribe((result: any) => {
      this.departmentList = result.data;
    })
  }

  animateGridEffect(action: string) {
    const rows = document.querySelectorAll('tbody tr');
    if (action === 'add' || action === 'update' || action === 'refresh') {
      gsap.from(rows, { opacity: 0, y: 20, duration: 0.5, stagger: 0.1 });
    }
  }
  animateRow(departmentId: number, action: string) {
    const row = document.querySelector(`tr[data-id="${departmentId}"]`);
    if (!row) return;

    if (action === 'edit') {
      gsap.to(row, { backgroundColor: '#ffffcc', duration: 0.5 });
      setTimeout(() => {
        gsap.to(row, { backgroundColor: '', duration: 0.5 });
      }, 1000);
    }

    if (action === 'delete') {
      gsap.to(row, {
        opacity: 0,
        x: -100,
        duration: 0.5,
        onComplete: () => {
          row.remove();
        },
      });
    }
  }
}
