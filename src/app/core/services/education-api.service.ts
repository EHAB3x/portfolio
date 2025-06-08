import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, timeout, repeatWhen, delay } from 'rxjs';
import { IQualifications } from '../interfaces/iqualifications';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EducationApiService {
  constructor(private httpClient: HttpClient) {}

  getAllEducations(): Observable<IQualifications[]> {
    return this.httpClient
      .get<IQualifications[]>(`${environment.baseUrl}/education`)
      .pipe(
        timeout(5000),
        repeatWhen((errors) => errors.pipe(delay(2000)))
      );
  }
}
