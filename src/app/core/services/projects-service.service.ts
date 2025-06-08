import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, timeout, delay, retryWhen } from 'rxjs';
import { IProjects } from '../interfaces/iprojects';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProjectsServiceService {
  constructor(private httpClient: HttpClient) {}

  getAllProjects(): Observable<IProjects[]> {
    return this.httpClient
      .get<IProjects[]>(`${environment.baseUrl}/projects`)
      .pipe(
        timeout(5000),
        retryWhen((errors) => errors.pipe(delay(2000)))
      );
  }

  getAllCategories(): Observable<IProjects['category'][]> {
    return this.getAllProjects().pipe(
      map((res) => {
        const cats = res.map((project) => project.category);
        return ['all', ...cats];
      })
    );
  }
}
