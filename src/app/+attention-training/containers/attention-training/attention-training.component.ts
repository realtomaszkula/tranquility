import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { FiltersService } from '../../services/filters.service';
import { QueryParamsService } from '../../services/query-params.service';
import { AttentionTraining } from '../../model';
import { getAllAttentionTrainings } from '../../ngrx/selectors';
import {
  LoadAttentionTrainings,
  DeleteAttentionTraining,
} from '../../ngrx/actions';

@Component({
  selector: 'tq-attention-training',
  templateUrl: './attention-training.component.html',
  styleUrls: ['./attention-training.component.scss'],
})
export class AttentionTrainingComponent implements OnInit {
  list$: Observable<AttentionTraining[]>;
  loading$: Observable<boolean>;

  constructor(private store: Store<any>) {
    this.list$ = this.store.select(getAllAttentionTrainings);
  }

  ngOnInit() {
    this.store.dispatch(new LoadAttentionTrainings());
  }

  delete(payload: AttentionTraining) {
    this.store.dispatch(new DeleteAttentionTraining(payload));
  }
}
