import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactdetailsComponent } from './contactdetails.component';

describe('ContactdetailsComponent', () => {
  let component: ContactdetailsComponent;
  let fixture: ComponentFixture<ContactdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactdetailsComponent]
    });
    fixture = TestBed.createComponent(ContactdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
