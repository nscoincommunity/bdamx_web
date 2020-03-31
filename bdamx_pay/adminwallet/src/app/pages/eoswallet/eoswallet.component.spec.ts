import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EoswalletComponent } from './eoswallet.component';

describe('EoswalletComponent', () => {
  let component: EoswalletComponent;
  let fixture: ComponentFixture<EoswalletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EoswalletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EoswalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
