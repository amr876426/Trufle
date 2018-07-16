import { TestBed, inject } from '@angular/core/testing';

import { TruflaService } from './trufla.service';

describe('TruflaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TruflaService]
    });
  });

  it('should be created', inject([TruflaService], (service: TruflaService) => {
    expect(service).toBeTruthy();
  }));
});
