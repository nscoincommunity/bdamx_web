import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebviewlineComponent } from './webviewline.component';

describe('WebviewlineComponent', () => {
  let component: WebviewlineComponent;
  let fixture: ComponentFixture<WebviewlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebviewlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebviewlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
