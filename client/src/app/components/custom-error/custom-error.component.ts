import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-error',
  standalone: true,
  imports: [],
  templateUrl: './custom-error.component.html',
  styleUrl: './custom-error.component.scss',
})
export class CustomErrorComponent {
  @Input() errorMessage: string | undefined;
}
