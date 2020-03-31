import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebviewfiatComponent } from './webviewfiat.component';

describe('WebviewfiatComponent', () => {
  let component: WebviewfiatComponent;
  let fixture: ComponentFixture<WebviewfiatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebviewfiatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebviewfiatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
