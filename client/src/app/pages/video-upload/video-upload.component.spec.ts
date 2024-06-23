import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VideoUploadComponent } from './video-upload.component';
import { VideoService } from '../../services/videos';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

describe('VideoUploadComponent', () => {
  let component: VideoUploadComponent;
  let fixture: ComponentFixture<VideoUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoUploadComponent],
      providers: [VideoService, provideHttpClient(), provideAnimationsAsync()],
    }).compileComponents();

    fixture = TestBed.createComponent(VideoUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
