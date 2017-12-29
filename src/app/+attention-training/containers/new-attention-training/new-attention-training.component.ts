import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromAttentionTraining from '../../reducers';
import * as timer from '../../actions/timer.actions';
import * as training from '../../actions/training.actions';
import { AttentionTrainingType } from '../../models/attention-training';

@Component({
  selector: 'tq-new-attention-training',
  templateUrl: './new-attention-training.component.html',
  styleUrls: ['./new-attention-training.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewAttentionTrainingComponent implements OnInit {
  isInInitialState$: Observable<boolean>;
  isStopped$: Observable<boolean>;
  isRunning$: Observable<boolean>;
  timerValue$: Observable<number>;

  isAdvancedTraining$: Observable<boolean>;
  isBeginnerTraining$: Observable<boolean>;

  constructor(private store: Store<fromAttentionTraining.State>) {
    this.isInInitialState$ = this.store.select(
      fromAttentionTraining.getTimerIsInInitialState,
    );
    this.isStopped$ = this.store.select(
      fromAttentionTraining.getTimerIsStopped,
    );
    this.isRunning$ = this.store.select(
      fromAttentionTraining.getTimerIsRunning,
    );
    this.timerValue$ = this.store.select(
      fromAttentionTraining.getTimerValueInSeconds,
    );
    this.isBeginnerTraining$ = this.store.select(
      fromAttentionTraining.getIsBeginnerTraining,
    );
    this.isAdvancedTraining$ = this.store.select(
      fromAttentionTraining.getIsAdvancedTraining,
    );
  }

  ngOnInit() {}

  onReset() {
    this.store.dispatch(new timer.ResetTimer());
  }

  onStart() {
    this.store.dispatch(new timer.StartTimer());
  }

  onStop() {
    this.store.dispatch(new timer.StopTimer());
  }

  onResume() {
    this.store.dispatch(new timer.ResumeTimer());
  }

  setBeginner() {
    this.store.dispatch(
      new training.SetTrainingType({
        trainingType: AttentionTrainingType.beginner,
      }),
    );
  }

  setAdvanced() {
    this.store.dispatch(
      new training.SetTrainingType({
        trainingType: AttentionTrainingType.advanced,
      }),
    );
  }
}
