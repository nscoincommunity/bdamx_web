import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdercancelComponent } from './ordercancel.component';

describe('OrdercancelComponent', () => {
  let component: OrdercancelComponent;
  let fixture: ComponentFixture<OrdercancelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdercancelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdercancelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
