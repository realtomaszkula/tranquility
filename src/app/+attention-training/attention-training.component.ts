import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { AttentionTrainingKey, AttentionTraining } from './types';
import { AttentionTrainingService } from './services/attention-training.service';
import { AttentionTrainingQpService } from './services/attention-training-qp.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AttentionTrainingFiltersService } from './services/attention-training-filters.service';

@Component({
  selector: 'tq-attention-training',
  templateUrl: './attention-training.component.html',
  styleUrls: ['./attention-training.component.scss'],
})
export class AttentionTrainingComponent implements OnInit {
  list$: Promise<AttentionTraining[]>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private qp$: AttentionTrainingQpService,
    private filters: AttentionTrainingFiltersService,
  ) {}

  ngOnInit() {
    this.qp$
      .getQp$(this.activatedRoute)
      .subscribe(queryParams =>
        this.filters.filters.setValue(queryParams, { emitEvent: false }),
      );

    this.filters.filters.valueChanges.subscribe(queryParams =>
      this.router.navigate([], { queryParams }),
    );
  }

}
