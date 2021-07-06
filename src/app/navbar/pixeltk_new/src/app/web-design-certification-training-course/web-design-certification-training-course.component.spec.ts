import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebDesignCertificationTrainingCourseComponent } from './web-design-certification-training-course.component';

describe('WebDesignCertificationTrainingCourseComponent', () => {
  let component: WebDesignCertificationTrainingCourseComponent;
  let fixture: ComponentFixture<WebDesignCertificationTrainingCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebDesignCertificationTrainingCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebDesignCertificationTrainingCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
