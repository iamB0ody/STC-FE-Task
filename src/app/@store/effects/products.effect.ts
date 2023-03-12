import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ProductsService } from 'src/app/@shared/services/products/products.service';

@Injectable()
export class ProductsEffects {

  loadMovies$ = createEffect(() => this.actions$.pipe(
    ofType('[Products API] Fetch Products'),
    mergeMap(() => this.productsService.getAll()
      .pipe(
        map(productsRes => ({ type: '[Products API] Fetch Products Success', payload: productsRes })),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private productsService: ProductsService
  ) {}
}
