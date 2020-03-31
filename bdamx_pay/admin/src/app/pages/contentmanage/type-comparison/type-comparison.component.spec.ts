import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeComparisonComponent } from './type-comparison.component';

describe('TypeComparisonComponent', () => {
  let component: TypeComparisonComponent;
  let fixture: ComponentFixture<TypeComparisonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeComparisonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeComparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
