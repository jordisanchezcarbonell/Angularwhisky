import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllwhiskyComponent } from './allwhisky.component';

describe('AllwhiskyComponent', () => {
  let component: AllwhiskyComponent;
  let fixture: ComponentFixture<AllwhiskyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllwhiskyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllwhiskyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
