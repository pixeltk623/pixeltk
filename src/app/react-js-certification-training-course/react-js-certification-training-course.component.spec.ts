import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactJsCertificationTrainingCourseComponent } from './react-js-certification-training-course.component';

describe('ReactJsCertificationTrainingCourseComponent', () => {
  let component: ReactJsCertificationTrainingCourseComponent;
  let fixture: ComponentFixture<ReactJsCertificationTrainingCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactJsCertificationTrainingCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactJsCertificationTrainingCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
