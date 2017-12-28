import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { empty } from 'rxjs/observable/empty';
import { fromPromise } from 'rxjs/observable/fromPromise';
import { of } from 'rxjs/observable/of';
import {
  delay,
  debounceTime,
  map,
  switchMap,
  skip,
  takeUntil,
  catchError,
  tap,
} from 'rxjs/operators';

import {
  AttentionTrainingTypes,
  LoadAttentionTrainingsComplete,
  LoadAttentionTrainingsError,
} from './actions';
import { AttentionTraining } from '../model';
import { DBService } from '../services/db.service';

@Injectable()
export class AttentionTrainingEffects {
  @Effect()
  load$: Observable<Action> = this.actions$
    .ofType(AttentionTrainingTypes.LoadAttentionTrainings)
    .pipe(
      switchMap(() =>
        fromPromise(this.db.getAll()).pipe(
          delay(400),
          map(
            attentionTrainings =>
              new LoadAttentionTrainingsComplete(attentionTrainings),
          ),
          catchError(error => of(new LoadAttentionTrainingsError(error))),
        ),
      ),
    );

  constructor(private actions$: Actions, private db: DBService) {}
}
