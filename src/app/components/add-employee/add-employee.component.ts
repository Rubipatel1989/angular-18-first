import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddEmployeeComponent implements OnInit {
  http = inject(HttpClient);
  userList: any[] = [];
  isApi: Boolean = false;
  name: string = 'Html';

  constructor(private cdRef: ChangeDetectorRef) {

  }

  ngOnInit(): void {
    this.isApi = true;
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((result: any) => {
      this.userList = result;
      this.isApi = false;
      this.name = 'Java';
      console.log(this.userList);
      setTimeout(() => {

        this.cdRef.detectChanges();
      }, 2000);
    })
  }
  reloadUi() {

  }
}
