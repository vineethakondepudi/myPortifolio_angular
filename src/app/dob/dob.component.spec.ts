import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DobComponent } from './dob.component';

describe('DobComponent', () => {
  let component: DobComponent;
  let fixture: ComponentFixture<DobComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DobComponent]
    });
    fixture = TestBed.createComponent(DobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
