import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  isAuthenticated = (): boolean => {
    const user = localStorage.getItem('video_animator_email');
    if (user) return true;
    else return false;
  };
}
