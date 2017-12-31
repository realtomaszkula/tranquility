import { SettingsActions, SettingsTypes } from '../actions/settings.actions';
import { AppSettings } from '../models/settings';

export type State = AppSettings;

export const initialState: State = {
  attentionTraining: {
    vibrateOn: true,
    soundOn: true,
  },
};

export function reducer(state = initialState, action: SettingsActions): State {
  switch (action.type) {
    case SettingsTypes.reset: {
      return {
        ...initialState,
      };
    }
    case SettingsTypes.turnOnAttentionTrainingVibrate: {
      return {
        ...initialState,
        attentionTraining: {
          ...initialState.attentionTraining,
          vibrateOn: true,
        },
      };
    }
    case SettingsTypes.turnOffAttentionTrainingVibrate: {
      return {
        ...initialState,
        attentionTraining: {
          ...initialState.attentionTraining,
          vibrateOn: false,
        },
      };
    }
    case SettingsTypes.turnOnAttentionTrainingVibrate: {
      return {
        ...initialState,
        attentionTraining: {
          ...initialState.attentionTraining,
          soundOn: true,
        },
      };
    }
    case SettingsTypes.turnOffAttentionTrainingVibrate: {
      return {
        ...initialState,
        attentionTraining: {
          ...initialState.attentionTraining,
          soundOn: false,
        },
      };
    }
    default: {
      return state;
    }
  }
}

export const getAttentionTrainingSettings = (state: State) =>
  state.attentionTraining;
