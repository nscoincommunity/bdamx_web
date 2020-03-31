import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphwebviewComponent } from './graphwebview.component';

describe('GraphwebviewComponent', () => {
  let component: GraphwebviewComponent;
  let fixture: ComponentFixture<GraphwebviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphwebviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphwebviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
