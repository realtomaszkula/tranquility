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
  first,
  flatMap,
} from 'rxjs/operators';

import { LayoutTypes } from 'app/layout/actions/layout.actions';
import { getCurrentUrl } from 'app/reducers';
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
} from '../actions/list.actions';
import { AttentionTraining } from '../models/attention-training';
import { DBService } from '../services/db.service';
import { getTimerValue } from 'app/+attention-training/reducers';
import { ResetTimer } from 'app/+attention-training/actions/timer.actions';

@Injectable()
export class AttentionTrainingEffects {
  @Effect({ dispatch: false })
  fab$: Observable<boolean> = this.actions$
    .ofType(LayoutTypes.ClickFab)
    .pipe(
      withLatestFrom(this.store.select(getCurrentUrl)),
      filter(([action, url]) => url === '/attention-training'),
      switchMap(() => this.router.navigateByUrl('/attention-training/new')),
    );

  @Effect()
  save$: Observable<Action> = this.actions$
    .ofType(LayoutTypes.ClickFabMini)
    .pipe(
      switchMap(() =>
        this.store.select(getTimerValue).pipe(
          first(),
          flatMap(timerValue => [
            new AddAttentionTraining({
              trainingDate: new Date(),
              soundChangeIntervalInSeconds: 40,
              trainingDurationInSeconds: timerValue / 1000,
            }),
            new ResetTimer(),
          ]),
        ),
      ),
    );

  @Effect()
  load$: Observable<Action> = this.actions$
    .ofType(AttentionTrainingTypes.LoadAttentionTrainings)
    .pipe(
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
    private store: Store<any>,
  ) {}
}
