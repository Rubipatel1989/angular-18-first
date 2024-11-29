import { Component, AfterViewInit, ElementRef, ViewChild, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { gsap } from 'gsap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements AfterViewInit {
  @ViewChild('formContainer', { static: true }) formContainer!: ElementRef;

  errorMessage: string = '';
  formValue: any;
  userObj: any = {
    userName: '',
    password: ''
  }

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
  router = inject(Router);
  onLogin() {
    if (this.userObj.userName == 'pawan.k@exeire.com' && this.userObj.password == 'Bsa@123456') {
      localStorage.setItem('loginUser',this.userObj.userName);
      this.router.navigateByUrl('pipe');
    } else {
      this.errorMessage = 'Please fill out all required fields.';
      return;
    }
  }
}
