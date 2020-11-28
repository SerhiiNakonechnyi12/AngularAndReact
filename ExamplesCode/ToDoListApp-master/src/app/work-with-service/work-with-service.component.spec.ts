import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkWithServiceComponent } from './work-with-service.component';

describe('WorkWithServiceComponent', () => {
  let component: WorkWithServiceComponent;
  let fixture: ComponentFixture<WorkWithServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkWithServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkWithServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
