import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, JsonPipe } from '@angular/common';
import { gsap } from 'gsap';
import { Constant } from '../../constant/Constant';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, JsonPipe],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements AfterViewInit {
  @ViewChild('formContainer', { static: true }) formContainer!: ElementRef;

  registerObj: any = {
    name: '',
    email: '',
    gender:'',
    password: '',
    confirmPassword: ''
  };
  successMessage: string = '';
  errorMessage: string = '';
  formValue: any;

  genderValues: any = Constant.GENDER;

  ngAfterViewInit() {
    // Animate the form elements
    gsap.from(this.formContainer.nativeElement, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power2.out',
      stagger: 0.2
    });

    gsap.from('.form-group', {
      x: -50,
      opacity: 0,
      duration: 1,
      ease: 'power2.out',
      stagger: 0.2,
      delay: 0.5,
    });

    gsap.from('.btn', {
      scale: 0,
      duration: 0.5,
      ease: 'back.out(1.7)',
      stagger: 0.2,
      delay: 1.5
    });
  }

  onRegister() {
    this.formValue = this.registerObj;
    if (this.registerObj.password !== this.registerObj.confirmPassword) {
      this.errorMessage = 'Passwords do not match';
      return;
    }
    console.log("Form Submitted", this.registerObj);
  }

  onReset(form: any) {
    form.resetForm();
    this.registerObj = {
      name: '',
      email: '',
      gender:'',
      password: '',
      confirmPassword: ''
    };
    this.successMessage = '';
    this.errorMessage = '';
  }
}
