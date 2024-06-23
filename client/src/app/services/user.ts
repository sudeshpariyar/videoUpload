import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface IUser {
  email: string;
  password: string;
  confirmPassword?: string;
}

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient) {}
  registerUser({ email, password, confirmPassword }: IUser): Observable<any> {
    return this.http.post('http://localhost:8000/api/user', {
      email,
      password,
      confirmPassword,
    });
  }
  loginUser = ({ email, password }: IUser): Observable<any> => {
    return this.http.post(
      'http://localhost:8000/api/user/login',
      {
        email,
        password,
      },
      {
        withCredentials: true,
      }
    );
  };
}
