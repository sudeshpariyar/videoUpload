import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingUploadCardComponent } from './landing-upload-card.component';

describe('LandingUploadCardComponent', () => {
  let component: LandingUploadCardComponent;
  let fixture: ComponentFixture<LandingUploadCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingUploadCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LandingUploadCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
