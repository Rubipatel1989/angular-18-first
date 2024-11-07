import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  courseName: String = 'Python';
  inputType = "checkbox";
  rollNo: Number = 123;
  isIndian: boolean = true;
  currentDate: Date = new Date();
  myClassName: String = "bg-danger";
  stateName:String = "Uttar Pradesh";
  firstName = signal("Pawan Kumar");

  constructor() {
    //this.courseName = "";
  }
  changeCourseName(){
    this.courseName = 'Python is good';
    this.firstName.set("Rahul Jha");
  }
  showAlert(message: string) {
    alert(message);
  }

}
