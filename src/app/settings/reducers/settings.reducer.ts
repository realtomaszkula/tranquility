import { SettingsActions, SettingsTypes } from '../actions/settings.actions';
import { AppSettings } from '../models/settings';

export type State = AppSettings;

export const initialState: State = {
  attentionTraining: {
    beginner: {
      soundChangeIntervalInSeconds: 40,
    },
    advanced: {
      soundChangeIntervalInSeconds: 10,
    },
  },
};

export function reducer(state = initialState, action: SettingsActions): State {
  switch (action.type) {
    case SettingsTypes.reset: {
      return {
        ...initialState,
      };
    }
    default: {
      return state;
    }
  }
}

export const getAttentionTrainingSettings = (state: State) =>
  state.attentionTraining;
