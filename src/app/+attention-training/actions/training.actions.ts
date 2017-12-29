import { Action } from '@ngrx/store';
import { AttentionTrainingType } from '../models/attention-training';

export enum TrainingTypes {
  setType = '[Training] set training type',
  announceSoundChange = '[Traning] announceSoundChange',
}

export class SetTrainingType implements Action {
  readonly type = TrainingTypes.setType;

  constructor(public payload: { trainingType: AttentionTrainingType }) {}
}

export class AnnounceSoundChange implements Action {
  readonly type = TrainingTypes.announceSoundChange;
}

export type TrainingActions = SetTrainingType | AnnounceSoundChange;
