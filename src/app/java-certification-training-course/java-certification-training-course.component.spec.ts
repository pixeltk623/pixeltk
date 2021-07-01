import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavaCertificationTrainingCourseComponent } from './java-certification-training-course.component';

describe('JavaCertificationTrainingCourseComponent', () => {
  let component: JavaCertificationTrainingCourseComponent;
  let fixture: ComponentFixture<JavaCertificationTrainingCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavaCertificationTrainingCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JavaCertificationTrainingCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
