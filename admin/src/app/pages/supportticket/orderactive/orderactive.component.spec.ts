import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderactiveComponent } from './orderactive.component';

describe('OrderactiveComponent', () => {
  let component: OrderactiveComponent;
  let fixture: ComponentFixture<OrderactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
