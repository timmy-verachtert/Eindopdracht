import { TestBed } from '@angular/core/testing';

import { OpdrachtService } from './opdracht.service';

describe('OpdrachtService', () => {
  let service: OpdrachtService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpdrachtService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
