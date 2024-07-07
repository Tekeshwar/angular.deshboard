import { HttpInterceptorFn, HttpStatusCode } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { NotificationService } from '../services/notification.service';
import { throwError, timer } from 'rxjs';
import { catchError, mergeMap, retryWhen } from 'rxjs/operators';

export const errorHandleInterceptor: HttpInterceptorFn = (req, next) => {
  const notificationService = inject(NotificationService);

  return next(req).pipe(
    retryWhen(errors => 
      errors.pipe(
        mergeMap((error, retryCount) => {
          if (retryCount < 3 && error.status >= HttpStatusCode.ServiceUnavailable) {
            // Retry up to 3 times for server errors
            return timer(1000); // Wait 1 second before retrying
          }
          return throwError(() => new Error(error.message));
        })
      )
    ),
    catchError((error: HttpErrorResponse) => {
      let errorMessage = '';

      if (error.error instanceof ErrorEvent) {
        // Client-side or network error
        errorMessage = `Client-side error: ${error.error.message}`;
      } else {
        // Server-side error
        errorMessage = `Server error: ${error.status}\nMessage: ${error.message}`;
      }

      // Log the error to the console
      console.error(errorMessage);

      // Show a user-friendly message
      notificationService.showError(errorMessage);

      // Return an observable with a user-facing error message
      return throwError(() => new Error(errorMessage));
    })
  );
};