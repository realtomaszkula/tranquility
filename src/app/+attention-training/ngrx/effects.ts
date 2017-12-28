import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Effect, Actions } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { RouterAction } from '@ngrx/router-store';
import { Observable } from 'rxjs/Observable';
import { empty } from 'rxjs/observable/empty';
import { fromPromise } from 'rxjs/observable/fromPromise';
import { of } from 'rxjs/observable/of';
import {
  delay,
  filter,
  map,
  switchMap,
  catchError,
  tap,
  withLatestFrom,
} from 'rxjs/operators';

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
} from './actions';
import { LayoutActionTypes } from 'app/layout/ngrx/actions';
import { AttentionTraining } from '../model';
import { DBService } from '../services/db.service';
import { getCurrentUrl } from 'app/reducers';

@Injectable()
export class AttentionTrainingEffects {
  @Effect()
  load$: Observable<Action> = this.actions$
    .ofType(AttentionTrainingTypes.LoadAttentionTrainings)
    .pipe(
      delay(1000),
      switchMap(() =>
        fromPromise(this.db.getAll()).pipe(
          map(
            attentionTrainings =>
              new LoadAttentionTrainingsComplete(attentionTrainings),
          ),
          catchError(error => of(new LoadAttentionTrainingsError(error))),
        ),
      ),
    );

  @Effect()
  create$: Observable<Action> = this.actions$
    .ofType(LayoutActionTypes.FabClick)
    .pipe(
      switchMap(() =>
        of(
          new AddAttentionTraining({
            startDate: new Date(Math.random()),
            endDate: new Date(),
            soundChangeInterval: 30,
          }),
        ),
      ),
    );

  @Effect()
  add$: Observable<Action> = this.actions$
    .ofType(AttentionTrainingTypes.AddAttentionTraining)
    .pipe(
      delay(1000),
      withLatestFrom(this.store.select(getCurrentUrl)),
      filter(([action, url]) => url === '/attention-training'),
      map(([action]) => action),
      switchMap(({ payload }: any) => {
        return fromPromise(this.db.add(payload)).pipe(
          map(
            attentionTraining =>
              new AddAttentionTrainingComplete(attentionTraining),
          ),
          catchError(error => of(new AddAttentionTrainingError(error))),
        );
      }),
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
    private actions$: Actions,
    private db: DBService,
    private store: Store<any>,
  ) {}
}
