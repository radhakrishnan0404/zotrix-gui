import { TestBed } from '@angular/core/testing';

import { ItemsdataServiceService } from './itemsdata-service.service';

describe('ItemsdataServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ItemsdataServiceService = TestBed.get(ItemsdataServiceService);
    expect(service).toBeTruthy();
  });
});
