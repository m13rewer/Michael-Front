import { TestBed } from '@angular/core/testing';

import { PrepServiceService } from './prep-service.service';

describe('PrepServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PrepServiceService = TestBed.get(PrepServiceService);
    expect(service).toBeTruthy();
  });
});
