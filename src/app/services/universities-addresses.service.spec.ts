import { TestBed } from '@angular/core/testing';

import { UniversitiesAddressesService } from './universities-addresses.service';

describe('UniversitiesAddressesService', () => {
  let service: UniversitiesAddressesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UniversitiesAddressesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
