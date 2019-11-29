import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyprofitComponent } from './currencyprofit.component';

describe('CurrencyprofitComponent', () => {
  let component: CurrencyprofitComponent;
  let fixture: ComponentFixture<CurrencyprofitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrencyprofitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyprofitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
