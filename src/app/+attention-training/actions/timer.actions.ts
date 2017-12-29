import { Action } from '@ngrx/store';

export enum TimerTypes {
  start = '[Timer] start',
  increment = '[Timer] increment',
  stop = '[Timer] stop',
  resume = '[Timer] resume',
  reset = '[Timer] reset',
}

export class StartTimer implements Action {
  readonly type = TimerTypes.start;
}

export class IncrementTimer implements Action {
  readonly type = TimerTypes.increment;
}

export class StopTimer implements Action {
  readonly type = TimerTypes.stop;
}

export class ResumeTimer implements Action {
  readonly type = TimerTypes.resume;
}

export class ResetTimer implements Action {
  readonly type = TimerTypes.reset;
}

export type TimerActions =
  | StartTimer
  | IncrementTimer
  | StopTimer
  | ResumeTimer
  | ResetTimer;
