import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { AttentionTraining } from '../../models/attention-training';
import * as fromAttentionTraining from '../../reducers';
import * as list from '../../actions/list.actions';

import * as moment from 'moment';

@Component({
  selector: 'tq-attention-training',
  templateUrl: './attention-training.component.html',
  styleUrls: ['./attention-training.component.scss'],
})
export class AttentionTrainingComponent implements OnInit {
  list$: Observable<AttentionTraining[]>;
  loading$: Observable<boolean>;

  constructor(private store: Store<any>) {
    this.list$ = this.store.select(
      fromAttentionTraining.getAllAttentionTrainings,
    );
    this.loading$ = this.store.select(
      fromAttentionTraining.getAttentionTrainingLoading,
    );
  }

  ngOnInit() {}

  delete(payload: AttentionTraining) {
    this.store.dispatch(new list.DeleteAttentionTraining(payload));
  }
}
