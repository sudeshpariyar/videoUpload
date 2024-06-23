import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing-upload-card',
  standalone: true,
  imports: [MatButtonModule, CommonModule],
  templateUrl: './landing-upload-card.component.html',
  styleUrl: './landing-upload-card.component.scss',
})
export class LandingUploadCardComponent {
  allowUploadVideo: string | null;

  constructor(
    // private store: Store<{ user: IUserState }>,
    private router: Router
  ) {
    // store
    //   .select((state) => state.user)
    //   .subscribe((user) => {
    //     if (user.email) {
    //       this.allowUploadVideo = false;
    //     }
    //   });

    this.allowUploadVideo = localStorage.getItem('video_animator_email');
  }

  handleUpload = () => {
    this.router.navigate(['/videoupload']);
  };
}
