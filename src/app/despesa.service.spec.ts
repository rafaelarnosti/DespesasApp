import { TestBed, inject } from '@angular/core/testing';

import { DespesaService } from './despesa.service';

describe('DespesaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DespesaService]
    });
  });

  it('should be created', inject([DespesaService], (service: DespesaService) => {
    expect(service).toBeTruthy();
  }));
});
