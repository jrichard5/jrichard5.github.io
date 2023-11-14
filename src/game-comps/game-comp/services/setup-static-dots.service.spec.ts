import { TestBed } from '@angular/core/testing';

import { SetupStaticDotsService } from './setup-static-dots.service';

describe('SetupStaticDotsService', () => {
  let service: SetupStaticDotsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetupStaticDotsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
