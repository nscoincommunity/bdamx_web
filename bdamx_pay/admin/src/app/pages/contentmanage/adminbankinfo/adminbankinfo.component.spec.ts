import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminbankinfoComponent } from './adminbankinfo.component';

describe('AdminbankinfoComponent', () => {
  let component: AdminbankinfoComponent;
  let fixture: ComponentFixture<AdminbankinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminbankinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminbankinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
