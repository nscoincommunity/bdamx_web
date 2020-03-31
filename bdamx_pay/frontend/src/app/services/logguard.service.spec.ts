import { TestBed } from '@angular/core/testing';

import { LogguardService } from './logguard.service';

describe('LogguardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LogguardService = TestBed.get(LogguardService);
    expect(service).toBeTruthy();
  });
});
