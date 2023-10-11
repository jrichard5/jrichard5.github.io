import { TestBed } from '@angular/core/testing';

import { ReadJsonServiceService } from './read-json-service.service';

describe('ReadJsonServiceService', () => {
  let service: ReadJsonServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReadJsonServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
