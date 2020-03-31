import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockCryptoComponent } from './block-crypto.component';

describe('BlockCryptoComponent', () => {
  let component: BlockCryptoComponent;
  let fixture: ComponentFixture<BlockCryptoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockCryptoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockCryptoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
