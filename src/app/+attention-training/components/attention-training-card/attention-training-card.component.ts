import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

import * as moment from 'moment';
import { AttentionTraining } from '../../models/attention-training';

@Component({
  selector: 'tq-attention-training-card',
  templateUrl: './attention-training-card.component.html',
  styleUrls: ['./attention-training-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AttentionTrainingCardComponent implements OnInit {
  @Output() delete = new EventEmitter<void>();
  @Input() attentionTraining: AttentionTraining;

  readonly icons: { [key in keyof Partial<AttentionTraining>]: string } = {
    soundChangeIntervalInSeconds: 'track_changes',
    trainingDurationInSeconds: 'timer',
    trainingDate: 'date_range',
  };

  get id() {
    return '#' + this.attentionTraining.id;
  }

  get trainingDate() {
    return this.attentionTraining.trainingDate;
  }

  get trainingDurationInSeconds() {
    return this.attentionTraining.trainingDurationInSeconds + 's';
  }

  get soundIntervalChangeInSeconds() {
    return this.attentionTraining.soundChangeIntervalInSeconds + 's';
  }

  constructor() {}

  ngOnInit() {}
}
