import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffiliatebannerComponent } from './affiliatebanner.component';

describe('AffiliatebannerComponent', () => {
  let component: AffiliatebannerComponent;
  let fixture: ComponentFixture<AffiliatebannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffiliatebannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffiliatebannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
