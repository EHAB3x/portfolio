import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

  getAllCategories(): IProjects['category'][] {
    let cats: IProjects['category'][] = [];
    this.getAllProjects().subscribe({
      next: (res) => {
        cats = res.map((project) => project.category);
      },
    });
    cats.unshift('all');
    return cats;
  }
}
