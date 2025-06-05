import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { exampleResolver } from './example.resolver';

describe('exampleResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => exampleResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
