import { HomeService } from './../../home/services/home.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as HomeActions from './home.actions';
import { catchError, EMPTY, map, mergeMap } from 'rxjs';
@Injectable()
export class HomePageEffects {
  loadNormalProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HomeActions.homeEnter),
      mergeMap(() =>
        this.homeService.getAllNormalProducts().pipe(
          map((products: any) => HomeActions.loadNormalProducts({ products })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  loadDOTDProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HomeActions.homeEnter),
      mergeMap(() =>
        this.homeService.getAllDOTDProducts().pipe(
          map((products: any) =>
            HomeActions.loadDealOfTheDayProducts({ products })
          ),
          catchError(() => EMPTY)
        )
      )
    )
  );
  constructor(private homeService: HomeService, private actions$: Actions) {}
}
