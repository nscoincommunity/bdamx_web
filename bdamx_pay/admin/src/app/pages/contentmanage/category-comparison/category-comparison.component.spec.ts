import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryComparisonComponent } from './category-comparison.component';

describe('CategoryComparisonComponent', () => {
  let component: CategoryComparisonComponent;
  let fixture: ComponentFixture<CategoryComparisonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryComparisonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryComparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
