import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickPopupComponent } from './quick-popup.component';

describe('QuickPopupComponent', () => {
  let component: QuickPopupComponent;
  let fixture: ComponentFixture<QuickPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuickPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
