import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { TimerTypes, TimerActions } from '../actions/timer.actions';

export interface State {
  value: number;
  isRunning: boolean;
}

export const initialState: State = {
  value: 0,
  isRunning: false,
};

export function reducer(state = initialState, action: TimerActions): State {
  switch (action.type) {
    case TimerTypes.resume:
    case TimerTypes.start: {
      return {
        ...state,
        isRunning: true,
      };
    }
    case TimerTypes.stop: {
      return {
        ...state,
        isRunning: false,
      };
    }
    case TimerTypes.increment: {
      return {
        ...state,
        value: state.value + 100,
      };
    }
    case TimerTypes.reset: {
      return {
        ...initialState,
      };
    }

    default:
      return state;
  }
}

export const getCurrentValue = (state: State) => state.value;
export const getIsRunning = (state: State) => state.isRunning;
export const getIsStopped = (state: State) =>
  !state.isRunning && state.value > 0;
export const getIsInInitialState = (state: State) =>
  !state.isRunning && state.value === 0;
