import { ResolveFn } from '@angular/router';

export const exampleResolver: ResolveFn<boolean> = (route, state) => {
  return true;
};
