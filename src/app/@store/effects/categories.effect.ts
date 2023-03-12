import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { CategoriesService } from 'src/app/@shared/services/categories/categories.service';

@Injectable()
export class CategoriesEffects {

  loadMovies$ = createEffect(() => this.actions$.pipe(
    ofType('[Categories API] Fetch Categories'),
    mergeMap(() => this.categoriesService.getAll()
      .pipe(
        map(categoriesRes => ({ type: '[Categories API] Fetch Categories Success', payload: categoriesRes })),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private categoriesService: CategoriesService
  ) {}
}
