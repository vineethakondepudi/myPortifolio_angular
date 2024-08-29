import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpendTableComponent } from './expend-table.component';

describe('ExpendTableComponent', () => {
  let component: ExpendTableComponent;
  let fixture: ComponentFixture<ExpendTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpendTableComponent]
    });
    fixture = TestBed.createComponent(ExpendTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
