import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportissuesComponent } from './supportissues.component';

describe('SupportissuesComponent', () => {
  let component: SupportissuesComponent;
  let fixture: ComponentFixture<SupportissuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportissuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportissuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
