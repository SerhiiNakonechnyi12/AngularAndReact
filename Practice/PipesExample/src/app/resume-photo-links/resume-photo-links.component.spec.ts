import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumePhotoLinksComponent } from './resume-photo-links.component';

describe('ResumePhotoLinksComponent', () => {
  let component: ResumePhotoLinksComponent;
  let fixture: ComponentFixture<ResumePhotoLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumePhotoLinksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumePhotoLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
