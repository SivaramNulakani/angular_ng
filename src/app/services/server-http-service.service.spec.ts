import { TestBed, inject } from '@angular/core/testing';

import { ServerHttpServiceService } from './server-http-service.service';

describe('ServerHttpServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServerHttpServiceService]
    });
  });

  it('should be created', inject([ServerHttpServiceService], (service: ServerHttpServiceService) => {
    expect(service).toBeTruthy();
  }));
});
