import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularCertificationTrainingCourseComponent } from './angular-certification-training-course.component';

describe('AngularCertificationTrainingCourseComponent', () => {
  let component: AngularCertificationTrainingCourseComponent;
  let fixture: ComponentFixture<AngularCertificationTrainingCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularCertificationTrainingCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularCertificationTrainingCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
