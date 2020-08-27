import { TestBed } from '@angular/core/testing';

import { ConsumirdataService } from './consumirdata.service';

describe('ConsumirdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConsumirdataService = TestBed.get(ConsumirdataService);
    expect(service).toBeTruthy();
  });
});
