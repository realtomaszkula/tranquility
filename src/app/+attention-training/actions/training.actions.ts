import { Action } from '@ngrx/store';
import { AttentionTrainingType } from '../models/attention-training';

export enum TrainingTypes {
  setType = '[Training] set training type',
}

export class SetTrainingType implements Action {
  readonly type = TrainingTypes.setType;

  constructor(public payload: { trainingType: AttentionTrainingType }) {}
}

export type TrainingActions = SetTrainingType;
