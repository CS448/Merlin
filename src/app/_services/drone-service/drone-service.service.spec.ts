import { TestBed, inject } from '@angular/core/testing';

import { DroneServiceService } from './drone-service.service';

describe('DroneServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DroneServiceService]
    });
  });

  it('should be created', inject([DroneServiceService], (service: DroneServiceService) => {
    expect(service).toBeTruthy();
  }));
});
