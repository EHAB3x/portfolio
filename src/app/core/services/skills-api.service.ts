import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Observable,
  delay,
  retryWhen,
  timeout,
} from 'rxjs';
import { ISkills } from '../interfaces/iskills';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SkillsApiService {
  constructor(private httpClient: HttpClient) {}

  getAllSkills(): Observable<ISkills[]> {
    return this.httpClient.get<ISkills[]>(`${environment.baseUrl}/skills`).pipe(
      timeout(5000),
      retryWhen((errors) => errors.pipe(delay(2000)))
      // catchError(err => {
      //   return throwError(() => new Error('Failed to load skills after multiple attempts.'));
      // })
    );
  }
}
