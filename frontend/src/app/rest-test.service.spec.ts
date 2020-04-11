import { TestBed, inject } from '@angular/core/testing';

import { RestTestService } from './rest-test.service';
import { HttpClientModule } from '@angular/common/http';

describe('RestTestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [RestTestService]
    });
  });

  it('should be created', inject([RestTestService], (service: RestTestService) => {
    expect(service).toBeTruthy();
  }));
});
