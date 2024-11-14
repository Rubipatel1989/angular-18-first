import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './environments/environment';

@Injectable({
  providedIn: 'root'
})


export class AuthService {

  constructor(private http: HttpClient) { }

  login(data: any) {
    return this.http.post(`${environment.apiUrl}/login`, data);
  }
  
  register(data: any) {
    return this.http.post(`${environment.apiUrl}/register`, data);
  }
}
