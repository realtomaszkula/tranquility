import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

import * as moment from 'moment';
import { AttentionTraining } from '../../model';

@Component({
  selector: 'tq-attention-training-card',
  templateUrl: './attention-training-card.component.html',
  styleUrls: ['./attention-training-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AttentionTrainingCardComponent implements OnInit {
  @Output() delete = new EventEmitter<void>();
  @Input() attentionTraining: AttentionTraining;

  get startDate() {
    return this.attentionTraining.startDate;
  }

  get endDate() {
    return this.attentionTraining.endDate;
  }

  get timeElapsed() {
    return moment(this.endDate).diff(moment(this.startDate), 'm') + ' minutes';
  }

  constructor() {}

  ngOnInit() {}
}
