import { TestBed } from '@angular/core/testing';

import { TeaServiceService } from './tea-service.service';

describe('TeaServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TeaServiceService = TestBed.get(TeaServiceService);
    expect(service).toBeTruthy();
  });
});
