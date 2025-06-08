import { TestBed } from '@angular/core/testing';

import { ExperienceApiService } from './experience-api.service';

describe('ExperienceApiService', () => {
  let service: ExperienceApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExperienceApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
