import { TestBed } from '@angular/core/testing';

import { RatingStarsService } from './rating-stars.service';

describe('RatingStarsService', () => {
  let service: RatingStarsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RatingStarsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
