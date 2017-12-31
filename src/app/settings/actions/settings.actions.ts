import { Action } from '@ngrx/store';

export enum SettingsTypes {
  reset = '[settings] reset',
  turnOnAttentionTrainingVibrate = '[settings -> ] tun on vibrate',
  turnOffAttentionTrainingVibrate = '[settings -> attentionTraining] turn off vibrate ',
  turnOnAttentionTrainingSound = '[settings -> ] tun on sound',
  turnOffAttentionTrainingSound = '[settings -> attentionTraining] turn off sound ',
}

/* General */
export class SettingsReset implements Action {
  readonly type = SettingsTypes.reset;
}

/* Attention Training */
export class TurnOffAttentionTrainingVibrate implements Action {
  readonly type = SettingsTypes.turnOffAttentionTrainingVibrate;
}

export class TurnOnAttentionTrainingVibrate implements Action {
  readonly type = SettingsTypes.turnOnAttentionTrainingVibrate;
}

export class TurnOffAttentionTrainingSound implements Action {
  readonly type = SettingsTypes.turnOffAttentionTrainingSound;
}

export class TurnOnAttentionTrainingSound implements Action {
  readonly type = SettingsTypes.turnOnAttentionTrainingSound;
}

export type SettingsActions =
  | SettingsReset
  | TurnOffAttentionTrainingSound
  | TurnOnAttentionTrainingSound
  | TurnOffAttentionTrainingVibrate
  | TurnOnAttentionTrainingVibrate;
