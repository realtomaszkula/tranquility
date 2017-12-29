import { Action } from '@ngrx/store';

export enum SettingsTypes {
  reset = 'reset',
}

export class SettingsReset implements Action {
  readonly type = SettingsTypes.reset;
}

export type SettingsActions = SettingsReset;
