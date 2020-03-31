import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockFiatComponent } from './block-fiat.component';

describe('BlockFiatComponent', () => {
  let component: BlockFiatComponent;
  let fixture: ComponentFixture<BlockFiatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockFiatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockFiatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
