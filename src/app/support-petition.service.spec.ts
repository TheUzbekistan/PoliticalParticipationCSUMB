import { TestBed } from '@angular/core/testing';

import { SupportPetitionService } from './support-petition.service';

describe('SupportPetitionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SupportPetitionService = TestBed.get(SupportPetitionService);
    expect(service).toBeTruthy();
  });
});
