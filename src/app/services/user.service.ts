import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { User } from '../Models/user';
import { HttpClient } from '@angular/common/http';
import { response } from 'express';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  signup(user:User): Observable<boolean> {
    return this.http.post<{sucess:boolean}>('url',user).
    pipe(
      map(response=> response.sucess),
      catchError(()=>{
        return of(false);
      })
    );      
  }
}
