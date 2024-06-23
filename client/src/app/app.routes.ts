import { Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { VideoUploadComponent } from './pages/video-upload/video-upload.component';
import { ViewVideoComponent } from './pages/view-video/view-video.component';
import { AuthGuard } from './shared/authGuard';

export const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'videoupload',
    component: VideoUploadComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'viewvideo/:id',
    component: ViewVideoComponent,
    canActivate: [AuthGuard],
  },
];
