import { Component } from '@angular/core';
import {
  Validators,
  FormsModule,
  ReactiveFormsModule,
  FormBuilder,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { UserService } from '../../services/user';
import { CommonModule } from '@angular/common';
import { CustomErrorComponent } from '../../components/custom-error/custom-error.component';
// import { Store } from '@ngrx/store';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    CommonModule,
    CustomErrorComponent,
    HeaderComponent,
  ],
})
export class LoginComponent {
  errorMessage = '';
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService // private store: Store
  ) {}

  login = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  handleLogin = () => {
    this.errorMessage = '';
    const { email, password } = this.login.value;
    if (!email || !password) return;
    this.userService.loginUser({ email, password }).subscribe({
      next: (data) => {
        // this.store.dispatch(
        //   loadUser({
        //     user: data,
        //   })
        // );
        // this.router.navigate(['/']);
        localStorage.setItem('video_animator_email', data.email);
        this.router.navigate(['/']);
      },
      error: (error) => (this.errorMessage = error.error.message),
    });
  };

  handleRegisterRoute = () => {
    this.router.navigate(['register']);
  };
}
