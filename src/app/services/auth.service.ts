import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _loginUrl = 'http://127.0.0.1:80/vtigercrm71/usersApi.php';
  constructor(httpClient: HttpClient) {}

 private loginStatus= new BehaviorSubject<boolean>(false);
 currentloginStatus = this.loginStatus.asObservable();
  //private loggedIn = false;

  login(email: string, password: string): Observable<boolean> {
    if (email === 'user@example.com' && password === 'password') {
      localStorage.setItem('token', 'secretToken');
      this.loginStatus.next(true);
      return of(true);
    }
    return of(false);
  }

  isLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    return token !== null && token !== '';
  }

  logout(): void {
    localStorage.setItem('token', '');
    this.loginStatus.next(false);
    //this.loggedIn = false;
  }
}
