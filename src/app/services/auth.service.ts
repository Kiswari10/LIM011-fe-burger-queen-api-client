import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(user: any): Observable<any> {
    return this.http.post<any>(`${baseUrl}auth`, user)
  }
  getToken() {
    console.log('getToken', localStorage.getItem('token'))
    return localStorage.getItem('token')
  }
  loggedIn() {
    console.log('loggedIn', localStorage.getItem('token'))
    return !!localStorage.getItem('token')
  }
}
