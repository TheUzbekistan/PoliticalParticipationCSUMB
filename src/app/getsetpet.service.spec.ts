import { TestBed } from '@angular/core/testing';

import { GetsetpetService } from './getsetpet.service';

describe('GetsetpetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetsetpetService = TestBed.get(GetsetpetService);
    expect(service).toBeTruthy();
  });
});
