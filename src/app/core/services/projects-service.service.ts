import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, timeout, repeatWhen, delay } from 'rxjs';
import { IProjects } from '../interfaces/iprojects';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProjectsServiceService {
  constructor(private httpClient: HttpClient) {}

  getAllProjects(): Observable<IProjects[]> {
    return this.httpClient.get<IProjects[]>(`${environment.baseUrl}/projects`);
  }

  getAllCategories(): Observable<IProjects['category'][]> {
    return this.getAllProjects().pipe(
      map((res) => {
        const cats = res.map((project) => project.category);
        return ['all', ...cats];
      }),
      timeout(5000),
      repeatWhen((errors) => errors.pipe(delay(2000)))
    );
  }
}
