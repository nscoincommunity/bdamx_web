import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskremainderComponent } from './riskremainder.component';

describe('RiskremainderComponent', () => {
  let component: RiskremainderComponent;
  let fixture: ComponentFixture<RiskremainderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiskremainderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiskremainderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
