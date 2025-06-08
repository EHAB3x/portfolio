import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, timeout, delay, retryWhen } from 'rxjs';
import { IQualifications } from '../interfaces/iqualifications';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ExperienceApiService {
  constructor(private httpClient: HttpClient) {}

  getAllExperiences(): Observable<IQualifications[]> {
    return this.httpClient
      .get<IQualifications[]>(`${environment.baseUrl}/experience`)
      .pipe(
        timeout(5000),
        retryWhen((errors) => errors.pipe(delay(2000)))
      );
  }
}
