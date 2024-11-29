import { Component, AfterViewInit, ElementRef, ViewChild, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { gsap } from 'gsap';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

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
    emailId: '',
    password: ''
  }

  router = inject(Router);
  http = inject(HttpClient);

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
    this.http.post("https://projectapi.gerasim.in/api/UserApp/login", this.userObj).subscribe((result: any) => {
      if (result.result) {
        localStorage.setItem('loginUser', JSON.stringify(result.data));
        this.router.navigateByUrl('pipe');
      } else {
        this.errorMessage = 'Please fill out all required fields.';
        return;
      }
    })

  }
}
