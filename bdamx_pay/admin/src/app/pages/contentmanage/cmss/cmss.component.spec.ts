import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmssComponent } from './cmss.component';

describe('CmssComponent', () => {
  let component: CmssComponent;
  let fixture: ComponentFixture<CmssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
