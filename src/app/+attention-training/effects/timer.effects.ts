import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { interval } from 'rxjs/observable/interval';
import {
  first,
  map,
  switchMap,
  takeUntil,
  withLatestFrom,
  tap,
  mergeMap,
  flatMap,
} from 'rxjs/operators';

import { State, getTimerValue } from '../reducers';
import {
  TimerTypes,
  IncrementTimer,
  StopTimer,
  ResetTimer,
} from '../actions/timer.actions';
import { AddAttentionTraining } from '../actions/list.actions';

@Injectable()
export class TimerEffects {
  @Effect()
  start$: Observable<Action> = this.actions$
    .ofType(TimerTypes.start, TimerTypes.resume)
    .pipe(
      switchMap(() =>
        interval(100).pipe(
          map(() => new IncrementTimer()),
          takeUntil(this.actions$.ofType(TimerTypes.stop)),
        ),
      ),
    );

  @Effect()
  save$: Observable<Action> = this.actions$.ofType(TimerTypes.save).pipe(
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

  constructor(private actions$: Actions, private store: Store<State>) {}
}
