import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseHttpExampleComponent } from './use-http-example.component';

describe('UseHttpExampleComponent', () => {
  let component: UseHttpExampleComponent;
  let fixture: ComponentFixture<UseHttpExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UseHttpExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UseHttpExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
