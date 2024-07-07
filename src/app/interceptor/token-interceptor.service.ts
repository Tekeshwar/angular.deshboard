import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TokenInterceptorService implements HttpInterceptor {
  constructor(private authService: AuthService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token: string = localStorage.getItem('token')??'';

    if (token) {
      //const request = req.clone({ headers: req.headers.set('Authorization', token) });

      const headers = new HttpHeaders().set('Authorization', 'Bearer' + token);
      const authRequest = req.clone({ headers: headers });
      return next.handle(authRequest);
    } else {
      return next.handle(req);
    }
  }
}
