import { Component } from '@angular/core';
import { ComponentWrapperComponent } from '../../components/component-wrapper/component-wrapper.component';
import { LandingUploadCardComponent } from '../../components/landing-upload-card/landing-upload-card.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [ComponentWrapperComponent, LandingUploadCardComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export class LandingComponent {}
