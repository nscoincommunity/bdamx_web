import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersupportComponent } from './usersupport.component';

describe('UsersupportComponent', () => {
  let component: UsersupportComponent;
  let fixture: ComponentFixture<UsersupportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersupportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
