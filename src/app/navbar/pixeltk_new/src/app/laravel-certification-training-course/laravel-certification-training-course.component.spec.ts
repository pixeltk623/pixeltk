import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaravelCertificationTrainingCourseComponent } from './laravel-certification-training-course.component';

describe('LaravelCertificationTrainingCourseComponent', () => {
  let component: LaravelCertificationTrainingCourseComponent;
  let fixture: ComponentFixture<LaravelCertificationTrainingCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaravelCertificationTrainingCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaravelCertificationTrainingCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
