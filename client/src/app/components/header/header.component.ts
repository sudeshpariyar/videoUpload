import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ComponentWrapperComponent } from '../component-wrapper/component-wrapper.component';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
// import { Store } from '@ngrx/store';
// import { IUserState } from '../../ngrx/user/user.state';
// import { removeUser } from '../../ngrx/user/user.action';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatButtonModule,
    ComponentWrapperComponent,
    CommonModule,
    RouterModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  showLogoutButton = false;
  userName: string | null;

  constructor(
    public router: Router,
    // private store: Store<{ user: IUserState }>,
    private cookieService: CookieService
  ) {
    // store
    //   .select((state) => state.user)
    //   .subscribe((user) => {
    //     if (user.email) {
    //       this.showLogoutButton = true;
    //       const name = user.email.split('@');
    //       this.userName = name[0];
    //     }
    //   });

    this.userName = localStorage.getItem('video_animator_email');
    if (this.userName) {
      this.showLogoutButton = true;
    } else {
      this.showLogoutButton = false;
    }
  }
  handleClick = () => {
    if (!this.showLogoutButton) {
      this.router.navigate(['login']);
    } else {
      this.cookieService.set('jwt_token', '');
      localStorage.setItem('video_animator_email', '');
      // this.store.dispatch(removeUser());
      this.router.navigate(['login']);
    }
  };
}
