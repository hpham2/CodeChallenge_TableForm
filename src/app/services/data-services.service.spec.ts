import { TestBed } from '@angular/core/testing';

import { DataServicesService } from './data-services.service';

describe('DataServicesService', () => {
  // let service: DataServicesService;
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should have id', () => {
    const service: DataServicesService = TestBed.get(DataServicesService);
    // expect(service).toBeTruthy();
    service.getModel().subscribe(val => {
      let firstElement = val[0];
      expect(firstElement.city).toEqual("Neftegorsk");
    })
  });
});
