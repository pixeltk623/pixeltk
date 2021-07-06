import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhpCertificationTrainingCourseComponent } from './php-certification-training-course.component';

describe('PhpCertificationTrainingCourseComponent', () => {
  let component: PhpCertificationTrainingCourseComponent;
  let fixture: ComponentFixture<PhpCertificationTrainingCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhpCertificationTrainingCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhpCertificationTrainingCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
