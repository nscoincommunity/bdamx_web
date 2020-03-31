import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangehistoryComponent } from './exchangehistory.component';

describe('ExchangehistoryComponent', () => {
  let component: ExchangehistoryComponent;
  let fixture: ComponentFixture<ExchangehistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExchangehistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangehistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
