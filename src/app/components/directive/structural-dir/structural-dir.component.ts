import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-structural-dir',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './structural-dir.component.html',
  styleUrl: './structural-dir.component.css'
})
export class StructuralDirComponent {
  isDiv1Visiable: boolean = true;
  isDiv2Visiable: boolean = true;

  num1: string = "";
  num2: string = "";

  isActive: Boolean = false;
  selectedState: String = "";

  cityArray: String[] = ['Kanpur', 'Noida', 'Lucknow', 'Fatehpur', 'Banda'];
  studentList: any[] = [
    { studId: 1, name: "Pawan Kumar", city: "Sainik Nagar", district: "Kanpur", isActive: false },
    { studId: 2, name: "Manoj Kumar", city: "Mohan Nagar", district: "Lucknow", isActive: false },
    { studId: 3, name: "Rahul Kumar", city: "Sareek Nagar", district: "Jodhpur", isActive: true },
    { studId: 4, name: "Pramod Kumar", city: "Kausabhi Nagar", district: "Kanpur", isActive: false },
    { studId: 5, name: "Raja Kumar", city: "Etawa Nagar", district: "Kanpur", isActive: true }
  ];

  showDiv1() {
    this.isDiv1Visiable = true;
  }
  hideDiv1() {
    this.isDiv1Visiable = false;
  }
  toggleDiv2() {
    this.isDiv2Visiable = !this.isDiv2Visiable;
  }
}
