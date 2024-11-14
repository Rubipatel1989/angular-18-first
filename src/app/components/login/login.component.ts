import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { gsap } from 'gsap';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements AfterViewInit {
  @ViewChild('formContainer', { static: true }) formContainer!: ElementRef;

  email: string = '';
  password: string = '';
  errorMessage: string = '';
  formValue: any;

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

  onLogin() {
    this.formValue = { email: this.email, password: this.password };

    if (!this.email || !this.password) {
      this.errorMessage = 'Please fill out all required fields.';
      return;
    }

    // Example login logic or API call
    console.log("Login Data Submitted", this.formValue);
  }
}
