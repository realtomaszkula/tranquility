import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { map, tap } from 'rxjs/operators';

import { VibrationService } from '../services/vibration.service';
import { TrainingTypes } from '../actions/training.actions';

@Injectable()
export class TrainingEffects {
  @Effect({ dispatch: false })
  announceSoundChange$: Observable<any> = this.actions$
    .ofType(TrainingTypes.announceSoundChange)
    .pipe(tap(() => this.vibrationService.vibrate()));

  constructor(
    private actions$: Actions,
    private vibrationService: VibrationService,
  ) {}
}
