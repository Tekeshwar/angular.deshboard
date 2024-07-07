import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss',
})
export class SigninComponent {
  signinForm: FormGroup;
  public errorMessage: string | undefined;
 // public loginStatus: boolean = false;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.signinForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSignin() {
    if (this.signinForm.valid) {
      this.authService
        .login(this.signinForm.value.email, this.signinForm.value.password)
        .subscribe((isAuthenticated: boolean) => {
          if (isAuthenticated) {
            // this.authService.currentloginStatus.subscribe((status) => {
            //   this.loginStatus = status.valueOf();
            // });
            this.router.navigate(['/dashboard']);
          } else {
            this.errorMessage = 'Invalid credentials';
          }
        });
    }
  }
}
