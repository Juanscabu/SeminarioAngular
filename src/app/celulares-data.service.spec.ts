import { TestBed } from '@angular/core/testing';

import { CelularesDataService } from './celulares-data.service';

describe('CelularesDataService', () => {
  let service: CelularesDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CelularesDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
