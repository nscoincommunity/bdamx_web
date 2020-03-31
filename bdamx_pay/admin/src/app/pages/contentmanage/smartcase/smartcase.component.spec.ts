import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartcaseComponent } from './smartcase.component';

describe('SmartcaseComponent', () => {
  let component: SmartcaseComponent;
  let fixture: ComponentFixture<SmartcaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartcaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
