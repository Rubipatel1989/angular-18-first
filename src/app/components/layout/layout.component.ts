import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { DepartmentService } from '../../service/department.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, FormsModule, CommonModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  selectedRole: string = '';
  router = inject(Router);
  loggedUserData: any;
  constructor(private deptService:DepartmentService) {
    const loggedData = localStorage.getItem('loginUser');
    if (loggedData != null) {
      this.loggedUserData = JSON.parse(loggedData);
    }
  }
  logOut() {
    localStorage.removeItem('loginUser');
    this.router.navigateByUrl('login');
  }

  onRoleChange(role:string){
    //debugger;
    this.deptService.onRoleChange$.next(role);
  }
}
