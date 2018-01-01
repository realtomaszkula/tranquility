import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Effect, Actions } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import {
  RouterAction,
  ROUTER_NAVIGATION,
  RouterNavigationAction,
} from '@ngrx/router-store';
import { Observable } from 'rxjs/Observable';
import { empty } from 'rxjs/observable/empty';
import { fromPromise } from 'rxjs/observable/fromPromise';
import { of } from 'rxjs/observable/of';
import { combineLatest } from 'rxjs/observable/combineLatest';
import {
  delay,
  filter,
  map,
  switchMap,
  catchError,
  tap,
  withLatestFrom,
  first,
  flatMap,
} from 'rxjs/operators';

import * as fromRoot from 'app/reducers';
import * as fromAttentionTraining from '../reducers';
import { LayoutTypes } from 'app/layout/actions/layout.actions';
import {
  AttentionTrainingTypes,
  LoadAttentionTrainingsComplete,
  LoadAttentionTrainingsError,
  AddAttentionTraining,
  AddAttentionTrainingComplete,
  AddAttentionTrainingError,
  DeleteAttentionTraining,
  DeleteAttentionTrainingComplete,
  DeleteAttentionTrainingError,
  LoadAttentionTrainings,
} from '../actions/list.actions';
import { DBService } from '../services/db.service';
import { AttentionTraining } from '../models/attention-training';
import { ResetTimer } from '../actions/timer.actions';
import { RouterStateUrl } from 'app/shared/utils';
import { queryParamsToFilters } from '../helpers/query-params';
import { isIndexPage } from '../helpers/navigation';

@Injectable()
export class AttentionTrainingEffects {
  @Effect({ dispatch: false })
  fab$: Observable<any> = this.actions$
    .ofType(LayoutTypes.ClickFab)
    .pipe(
      switchMap(() =>
        this.store
          .select(fromRoot.getCurrentUrl)
          .pipe(
            first(),
            filter(isIndexPage),
            tap(() => this.router.navigateByUrl('/attention-training/new')),
          ),
      ),
    );

  @Effect()
  save$: Observable<Action> = this.actions$
    .ofType(LayoutTypes.ClickFabMini)
    .pipe(
      switchMap(() =>
        combineLatest(
          this.store.select(fromAttentionTraining.getTimerValueInSeconds),
          this.store.select(
            fromAttentionTraining.getCurrentSoundChangeIntervalInSeconds,
          ),
        ).pipe(
          first(),
          flatMap(
            ([trainingDurationInSeconds, soundChangeIntervalInSeconds]) => [
              new AddAttentionTraining({
                trainingDate: new Date(),
                soundChangeIntervalInSeconds,
                trainingDurationInSeconds,
              }),
              new ResetTimer(),
            ],
          ),
        ),
      ),
    );

  @Effect()
  filters$: Observable<any> = this.actions$.ofType(ROUTER_NAVIGATION).pipe(
    map((action: RouterNavigationAction<RouterStateUrl>) => action.payload),
    filter(payload => isIndexPage(payload.event.urlAfterRedirects)),
    map(payload => payload.routerState.queryParams),
    map(queryParamsToFilters),
    flatMap(filters => [
      new LoadAttentionTrainings({
        filters,
        afterCursor: null,
      }),
    ]),
  );

  @Effect()
  load$: Observable<Action> = this.actions$
    .ofType(AttentionTrainingTypes.LoadAttentionTrainings)
    .pipe(
      switchMap(({ payload }: LoadAttentionTrainings) =>
        fromPromise(this.db.getIndex(payload)).pipe(
          map(
            attentionTrainings =>
              new LoadAttentionTrainingsComplete(attentionTrainings),
          ),
          catchError(error => of(new LoadAttentionTrainingsError(error))),
        ),
      ),
    );

  @Effect()
  add$: Observable<Action> = this.actions$
    .ofType(AttentionTrainingTypes.AddAttentionTraining)
    .pipe(
      switchMap(({ payload }: AddAttentionTraining) =>
        fromPromise(this.db.add(payload)).pipe(
          map(
            attentionTraining =>
              new AddAttentionTrainingComplete(attentionTraining),
          ),
          catchError(error => of(new AddAttentionTrainingError(error))),
        ),
      ),
    );

  @Effect()
  delete$: Observable<Action> = this.actions$
    .ofType(AttentionTrainingTypes.DeleteAttentionTraining)
    .pipe(
      map(action => (action as any).payload),
      switchMap(payload =>
        fromPromise(this.db.delete(payload.id)).pipe(
          map(
            attentionTraining => new DeleteAttentionTrainingComplete(payload),
          ),
          catchError(error => of(new DeleteAttentionTrainingError(error))),
        ),
      ),
    );

  constructor(
    private router: Router,
    private actions$: Actions,
    private db: DBService,
    private store: Store<fromAttentionTraining.State>,
  ) {}
}
