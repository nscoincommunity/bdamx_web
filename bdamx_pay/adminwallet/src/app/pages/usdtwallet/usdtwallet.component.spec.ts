import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsdtwalletComponent } from './usdtwallet.component';

describe('UsdtwalletComponent', () => {
  let component: UsdtwalletComponent;
  let fixture: ComponentFixture<UsdtwalletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsdtwalletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsdtwalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
