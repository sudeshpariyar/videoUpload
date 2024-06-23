import { Component } from '@angular/core';
import { ComponentWrapperComponent } from '../component-wrapper/component-wrapper.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ComponentWrapperComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {}
