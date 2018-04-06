import { TestBed, inject } from '@angular/core/testing';

import { SelectCharService } from './select-char.service';

describe('SelectCharService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SelectCharService]
    });
  });

  it('should be created', inject([SelectCharService], (service: SelectCharService) => {
    expect(service).toBeTruthy();
  }));
});
