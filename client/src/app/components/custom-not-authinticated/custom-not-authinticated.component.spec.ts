import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomNotAuthinticatedComponent } from './custom-not-authinticated.component';

describe('CustomNotAuthinticatedComponent', () => {
  let component: CustomNotAuthinticatedComponent;
  let fixture: ComponentFixture<CustomNotAuthinticatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomNotAuthinticatedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomNotAuthinticatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
