import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable, timeout, retryWhen } from 'rxjs';
import { IServices } from '../interfaces/iservices';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ServicesApiService {
  constructor(private httpClient: HttpClient) {}

  getAllServices(): Observable<IServices[]> {
    return this.httpClient
      .get<IServices[]>(`${environment.baseUrl}/services`)
      .pipe(
        timeout(5000),
        retryWhen((errors) => errors.pipe(delay(2000)))
      );
  }
}
