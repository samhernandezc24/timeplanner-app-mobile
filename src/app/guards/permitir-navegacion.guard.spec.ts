import { TestBed } from '@angular/core/testing';

import { PermitirNavegacionGuard } from './permitir-navegacion.guard';

describe('PermitirNavegacionGuard', () => {
  let guard: PermitirNavegacionGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PermitirNavegacionGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
