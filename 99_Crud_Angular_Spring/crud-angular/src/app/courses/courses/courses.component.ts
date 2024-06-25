import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';
import { Observable, catchError, of } from 'rxjs';
import { ErrorDialogComponent } from '../../shared/components/error-dialog/error-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent implements OnInit {

  courses$: Observable<Course[]>

  displayedColumns = ['id', 'name', 'category', 'actions']

  constructor(
    private coursesService: CoursesService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
  ) { 
    this.courses$ = this.coursesService.list()
      .pipe(
        catchError(error => {
          console.log(error);
          this.onError('Erro ao carregar cursos')
          return of( [])
        })
      )
  }

  ngOnInit(): void { }

  onError(errorMessage: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMessage,
    });
  }

  onAdd() {
    console.log("onAdd")
    this.router.navigate(['new'], { relativeTo: this.route})
  }

}
