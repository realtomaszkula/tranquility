import { Action } from '@ngrx/store';
import { AttentionTraining } from '../model';

export enum AttentionTrainingTypes {
  ClearAttentionTrainings = '[AttentionTraining] Clear',
  LoadAttentionTrainings = '[AttentionTraining] Load',
  LoadAttentionTrainingsError = '[AttentionTraining] Load Error',
  LoadAttentionTrainingsComplete = '[AttentionTraining] Load Complete',
  AddAttentionTraining = '[AttentionTraining] Add',
  AddAttentionTrainingError = '[AttentionTraining] Add Error',
  AddAttentionTrainingComplete = '[AttentionTraining] Add Complete',
  DeleteAttentionTraining = '[AttentionTraining] Delete',
  DeleteAttentionTrainingError = '[AttentionTraining] Delete Error',
  DeleteAttentionTrainingComplete = '[AttentionTraining] Delete Complete',
  UpdateAttentionTraining = '[AttentionTraining] Update',
  UpdateAttentionTrainingError = '[AttentionTraining] Update Error',
  UpdateAttentionTrainingComplete = '[AttentionTraining] Update Complete',
}

export class LoadAttentionTrainings implements Action {
  readonly type = AttentionTrainingTypes.LoadAttentionTrainings;
}

export class LoadAttentionTrainingsComplete implements Action {
  readonly type = AttentionTrainingTypes.LoadAttentionTrainingsComplete;

  constructor(public payload: AttentionTraining[]) {}
}

export class LoadAttentionTrainingsError implements Action {
  readonly type = AttentionTrainingTypes.LoadAttentionTrainingsError;

  constructor(public error: any) {}
}

export class AddAttentionTraining implements Action {
  readonly type = AttentionTrainingTypes.AddAttentionTraining;

  constructor(public payload: AttentionTraining) {}
}

export class AddAttentionTrainingError implements Action {
  readonly type = AttentionTrainingTypes.AddAttentionTrainingError;

  constructor(public payload: AttentionTraining) {}
}

export class AddAttentionTrainingComplete implements Action {
  readonly type = AttentionTrainingTypes.AddAttentionTrainingComplete;

  constructor(public payload: AttentionTraining) {}
}

export class DeleteAttentionTraining implements Action {
  readonly type = AttentionTrainingTypes.DeleteAttentionTraining;

  constructor(public payload: AttentionTraining) {}
}

export class DeleteAttentionTrainingError implements Action {
  readonly type = AttentionTrainingTypes.DeleteAttentionTrainingError;

  constructor(public payload: AttentionTraining) {}
}

export class DeleteAttentionTrainingComplete implements Action {
  readonly type = AttentionTrainingTypes.DeleteAttentionTrainingComplete;

  constructor(public payload: AttentionTraining) {}
}

export type AttentionTrainingActions =
  | LoadAttentionTrainings
  | LoadAttentionTrainingsError
  | LoadAttentionTrainingsComplete
  | AddAttentionTraining
  | AddAttentionTrainingError
  | AddAttentionTrainingComplete
  | DeleteAttentionTraining
  | DeleteAttentionTrainingError
  | DeleteAttentionTrainingComplete;
