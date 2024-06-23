import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewVideoComponent } from './view-video.component';
import { VideoService } from '../../services/videos';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import { routes } from '../../app.routes';

describe('ViewVideoComponent', () => {
  let component: ViewVideoComponent;
  let fixture: ComponentFixture<ViewVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewVideoComponent],
      providers: [
        VideoService,
        provideHttpClient(),
        provideAnimationsAsync(),
        provideRouter(routes),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
