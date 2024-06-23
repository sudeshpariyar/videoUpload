import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { ComponentWrapperComponent } from '../../components/component-wrapper/component-wrapper.component';
import { VideoService } from '../../services/videos';
import { ActivatedRoute } from '@angular/router';
import { IVideo } from '../../types/customInterface';
import { CustomNotAuthinticatedComponent } from '../../components/custom-not-authinticated/custom-not-authinticated.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-video',
  standalone: true,
  imports: [
    HeaderComponent,
    ComponentWrapperComponent,
    CustomNotAuthinticatedComponent,
    CommonModule,
  ],
  templateUrl: './view-video.component.html',
  styleUrl: './view-video.component.scss',
})
export class ViewVideoComponent {
  videoData!: IVideo;
  errorMessage!: string;
  path!: string;
  id!: number;
  errorStatus!: number;

  constructor(
    private videoService: VideoService,
    private route: ActivatedRoute
  ) {
    this.id = this.route.snapshot.paramMap.get('id') as unknown as number;
    if (this.id) {
      this.videoService.getSingleVideoToPlay({ id: this.id }).subscribe({
        next: (video) => {
          this.videoData = video;
          this.path = this.videoData.videoURL;
        },
        error: (error) => {
          this.errorStatus = error.status;
          this.errorMessage = error.error.message;
        },
      });
    }
  }
}
