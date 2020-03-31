import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UndermaintainenceComponent } from './undermaintainence.component';

describe('UndermaintainenceComponent', () => {
  let component: UndermaintainenceComponent;
  let fixture: ComponentFixture<UndermaintainenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UndermaintainenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UndermaintainenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
