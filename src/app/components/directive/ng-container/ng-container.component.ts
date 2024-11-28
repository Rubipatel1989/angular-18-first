import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-container',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ng-container.component.html',
  styleUrl: './ng-container.component.css'
})
export class NgContainerComponent {
  isContainer: boolean = true;

  http = inject(HttpClient);
  userList:any[] = [];
  isApi:Boolean = false;
  getUser() {
    this.isApi = true;
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((result:any) => {
      console.log(result);
      this.userList = result;
      this.isApi = false;
    });
  }
}
