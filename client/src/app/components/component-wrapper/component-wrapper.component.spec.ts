import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentWrapperComponent } from './component-wrapper.component';

describe('ComponentWrapperComponent', () => {
  let component: ComponentWrapperComponent;
  let fixture: ComponentFixture<ComponentWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentWrapperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponentWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
