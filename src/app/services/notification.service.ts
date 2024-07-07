import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private snackBar: MatSnackBar) { }

  showError(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000, // The message will be displayed for 3 seconds
      horizontalPosition: 'right', // Position of the snackbar
      verticalPosition: 'top', // Position of the snackbar
    });
  }
}
