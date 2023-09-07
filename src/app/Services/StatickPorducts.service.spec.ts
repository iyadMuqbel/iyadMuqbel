/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { StatickPorductsService } from './StatickPorducts.service';

describe('Service: StatickPorducts', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StatickPorductsService]
    });
  });

  it('should ...', inject([StatickPorductsService], (service: StatickPorductsService) => {
    expect(service).toBeTruthy();
  }));
});
