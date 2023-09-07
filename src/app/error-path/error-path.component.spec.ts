import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorPathComponent } from './error-path.component';

describe('ErrorPathComponent', () => {
  let component: ErrorPathComponent;
  let fixture: ComponentFixture<ErrorPathComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ErrorPathComponent]
    });
    fixture = TestBed.createComponent(ErrorPathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
