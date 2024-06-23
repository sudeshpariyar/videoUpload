import { Component } from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { UserService } from '../../services/user';
import { HeaderComponent } from '../../components/header/header.component';
import { CommonModule } from '@angular/common';
import { CustomErrorComponent } from '../../components/custom-error/custom-error.component';
import { IUserRegisterResponse } from '../../types/customInterface';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    HeaderComponent,
    CommonModule,
    CustomErrorComponent,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService
  ) {}
  errorMessage: string = '';
  register = this.formBuilder.group({
    email: [' ', [Validators.required]],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required],
  });
  handleLoginRoute = () => {
    this.router.navigate(['login']);
  };
  handleRegister = () => {
    if (this.register.invalid) {
      this.errorMessage = 'Something wrong in form';
    }
    const { confirmPassword, email, password } = this.register.value;
    if (!email || !password || !confirmPassword) return;
    if (confirmPassword != password) {
      this.errorMessage = 'Password did not match.';
    }
    if (confirmPassword === password) {
      this.userService
        .registerUser({
          email,
          password,
          confirmPassword,
        })
        .subscribe({
          next: (response: IUserRegisterResponse) => {
            if (response.status) {
              this.router.navigate(['/login']);
            }
          },
          error: (error) => (this.errorMessage = error.error.message),
        });
    }
  };
}
