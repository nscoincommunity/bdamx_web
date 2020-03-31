import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaidinComponent } from './paidin.component';

describe('PaidinComponent', () => {
  let component: PaidinComponent;
  let fixture: ComponentFixture<PaidinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaidinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaidinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
