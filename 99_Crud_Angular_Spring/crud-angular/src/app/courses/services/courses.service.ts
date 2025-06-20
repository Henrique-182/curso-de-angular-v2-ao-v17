import { Injectable } from '@angular/core';
import { Course } from '../model/course';
import { HttpClient } from '@angular/common/http';
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = 'api/course'

  constructor(private httpClient: HttpClient) { }

  list() {

    return this.httpClient.get<Course[]>(this.API)
      .pipe(
        first(),
        tap(courses => console.log(courses))
      )
  }

  save(record: Course) {

    return this.httpClient.post<Course>(this.API, record)
  }

}
