/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PromoationService } from './Promoation.service';

describe('Service: Promoation', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PromoationService]
    });
  });

  it('should ...', inject([PromoationService], (service: PromoationService) => {
    expect(service).toBeTruthy();
  }));
});
