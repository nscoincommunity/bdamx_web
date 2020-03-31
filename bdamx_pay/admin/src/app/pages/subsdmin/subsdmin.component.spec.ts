import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubsdminComponent } from './subsdmin.component';

describe('SubsdminComponent', () => {
  let component: SubsdminComponent;
  let fixture: ComponentFixture<SubsdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubsdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubsdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
