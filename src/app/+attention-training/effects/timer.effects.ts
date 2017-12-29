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

import { AnnounceSoundChange } from '../actions/training.actions';
import {
  TimerTypes,
  IncrementTimer,
  StopTimer,
  ResetTimer,
} from '../actions/timer.actions';
import * as fromAttentionTraining from '../reducers';

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
  announceSoundChange$: Observable<any> = this.actions$
    .ofType(TimerTypes.start, TimerTypes.resume)
    .pipe(
      switchMap(() =>
        this.store
          .select(
            fromAttentionTraining.getSoundChangeIntervalInSecondsForTrainingState,
          )
          .pipe(
            switchMap(soundChangeInterval =>
              interval(soundChangeInterval * 1000).pipe(
                map(() => new AnnounceSoundChange()),
                takeUntil(this.actions$.ofType(TimerTypes.stop)),
              ),
            ),
          ),
      ),
    );

  constructor(private actions$: Actions, private store: Store<any>) {}
}
