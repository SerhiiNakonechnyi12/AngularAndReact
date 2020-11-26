import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeExpirienceComponent } from './resume-expirience.component';

describe('ResumeExpirienceComponent', () => {
  let component: ResumeExpirienceComponent;
  let fixture: ComponentFixture<ResumeExpirienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumeExpirienceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeExpirienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
