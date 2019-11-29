import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecuritystrategyComponent } from './securitystrategy.component';

describe('SecuritystrategyComponent', () => {
  let component: SecuritystrategyComponent;
  let fixture: ComponentFixture<SecuritystrategyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecuritystrategyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecuritystrategyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
