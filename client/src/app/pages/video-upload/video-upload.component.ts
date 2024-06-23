import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { ComponentWrapperComponent } from '../../components/component-wrapper/component-wrapper.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { CustomErrorComponent } from '../../components/custom-error/custom-error.component';
import { VideoService } from '../../services/videos';
import { Router } from '@angular/router';
import { IVideo } from '../../types/customInterface';

@Component({
  selector: 'app-video-upload',
  standalone: true,
  imports: [
    HeaderComponent,
    ComponentWrapperComponent,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    CommonModule,
    CustomErrorComponent,
  ],
  templateUrl: './video-upload.component.html',
  styleUrl: './video-upload.component.scss',
})
export class VideoUploadComponent {
  errorMessage: string = '';
  videoFile!: File;
  videoData!: IVideo;
  // storeVideo$: Observable<IVideoState>;
  constructor(
    private formBuilder: FormBuilder,
    private videoService: VideoService,
    private router: Router // private store: Store<{ video: IVideoState }>
  ) {
    // this.storeVideo$ = store.select('video');
  }

  videoUploadForm = this.formBuilder.group({
    description: ['', Validators.required],
    title: ['', Validators.required],
  });

  onFileSelected = (event: any) => {
    if (event.target.files && event.target.files.length) {
      this.videoFile = event.target.files[0];
    }
  };

  handleSubmit = () => {
    this.errorMessage = '';
    if (this.videoUploadForm.status === 'INVALID') {
      this.errorMessage = 'Form is Invalid. Try Again!';
      return;
    }
    if (this.videoFile) {
      const { title, description } = this.videoUploadForm.value;
      if (title && description) {
        this.videoService
          .uploadVideo({ videoFile: this.videoFile, title, description })
          .subscribe({
            next: (response) => {
              this.videoData = response;
              console.log('videoData: ', this.videoData);
              this.router.navigate([`viewvideo/${this.videoData.id}`]);
            },
            error: (error) => (this.errorMessage = error.error.message),
          });
      }
    }
  };
}
