import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetacontentComponent } from './metacontent.component';

describe('MetacontentComponent', () => {
  let component: MetacontentComponent;
  let fixture: ComponentFixture<MetacontentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetacontentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetacontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
