import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { UserService } from '../../services/user';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import { routes } from '../../app.routes';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterComponent],
      providers: [
        UserService,
        provideHttpClient(),
        provideAnimationsAsync(),
        provideRouter(routes),
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should validate Register Form', () => {
    let email = component.register.controls.email;
    email.setValue('invalid-email');
    expect(email.valid).toBeFalsy();

    let password = component.register.controls.password;
    password.setValue('');
    expect(password.valid).toBeFalsy();

    let confirmPassword = component.register.controls.confirmPassword;
    confirmPassword.setValue('');
    expect(confirmPassword.valid).toBeFalsy();
  });
});
