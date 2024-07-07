import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User } from '../../Models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {
  signupForm: FormGroup;
  user: User | undefined;
  errorMessage: string | undefined;
  public messageClass:string | undefined;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.signupForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      fullname: ['', [Validators.required, Validators.minLength(6)]],
      mobile: ['', [Validators.required, Validators.minLength(10)]],
      role: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  onSignup() {
    if (this.signupForm.valid) {
      console.log('Form Value:', this.signupForm.value);
      this.user = new User();
      this.user.userName = this.signupForm.value.fullname;
      this.user.mobile = this.signupForm.value.mobile;
      this.user.password = this.signupForm.value.password;
      this.user.email = this.signupForm.value.email;
      this.user.role = this.signupForm.value.role;

      this.userService.signup(this.user).subscribe((response) => {
        if (response) {
          this.messageClass='sucess-message';
          this.errorMessage = 'User added successfuly';
          this.router.navigate(['/signin']);
        } else{
          this.messageClass='error-message';
          this.errorMessage = 'something went wrong';
        } 
      });
      // Perform signup action here
    }
  }
}
