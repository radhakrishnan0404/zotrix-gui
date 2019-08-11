import { TestBed } from '@angular/core/testing';

import { NotifiServiceService } from './notifi-service.service';

describe('NotifiServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NotifiServiceService = TestBed.get(NotifiServiceService);
    expect(service).toBeTruthy();
  });
});
