import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-attribute-directive',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './attribute-directive.component.html',
  styleUrl: './attribute-directive.component.css'
})
export class AttributeDirectiveComponent {
  div1BgColor: String = 'bg-primary';
  isDiv2Active: Boolean = false
  num1: String = '';
  num2: String = '';
  isActive: Boolean = false;
  selectedState: String = 'India';

  cityArray: String[] = ['Kanpur', 'Noida', 'Lucknow', 'Fatehpur', 'Banda'];
  studentList: any[] = [
    { studId: 1, totalMarks: '10', name: "Pawan Kumar", gender: 'Male', city: "Sainik Nagar", district: "Kanpur", isActive: false },
    { studId: 2, totalMarks: '20', name: "Manoj Kumar", gender: 'Male', city: "Mohan Nagar", district: "Lucknow", isActive: false },
    { studId: 3, totalMarks: '80', name: "Rahul Kumar", gender: 'FeMale', city: "Sareek Nagar", district: "Jodhpur", isActive: true },
    { studId: 4, totalMarks: '40', name: "Pramod Kumar", gender: 'Male', city: "Kausabhi Nagar", district: "Kanpur", isActive: false },
    { studId: 5, totalMarks: '50', name: "Raja Kumar", gender: 'FeMale', city: "Etawa Nagar", district: "Kanpur", isActive: true }
  ];

  customerStyle: any = {
    'color': 'white',
    'background-color':'red',
    'width':'200px',
    'height':'200px',
    'border-radius':'30%'
  }

  addRedClass() {
    this.div1BgColor = 'bg-danger';
  }
  addSecondaryClass() {
    this.div1BgColor = 'bg-secondary'
  }
  toggleDiv2Class() {
    this.isDiv2Active = !this.isDiv2Active;
  }
}
