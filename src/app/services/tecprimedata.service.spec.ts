/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TecprimedataService } from './tecprimedata.service';

describe('Service: Tecprimedata', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TecprimedataService]
    });
  });

  it('should ...', inject([TecprimedataService], (service: TecprimedataService) => {
    expect(service).toBeTruthy();
  }));
});
