import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminbankdetailsComponent } from './adminbankdetails.component';

describe('AdminbankdetailsComponent', () => {
  let component: AdminbankdetailsComponent;
  let fixture: ComponentFixture<AdminbankdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminbankdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminbankdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
