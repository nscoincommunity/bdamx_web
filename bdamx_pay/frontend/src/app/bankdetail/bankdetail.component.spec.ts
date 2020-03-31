import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankdetailComponent } from './bankdetail.component';

describe('BankdetailComponent', () => {
  let component: BankdetailComponent;
  let fixture: ComponentFixture<BankdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
