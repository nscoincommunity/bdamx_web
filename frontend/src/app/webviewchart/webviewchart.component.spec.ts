import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebviewchartComponent } from './webviewchart.component';

describe('WebviewchartComponent', () => {
  let component: WebviewchartComponent;
  let fixture: ComponentFixture<WebviewchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebviewchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebviewchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
