import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromList from './list.reducer';
import * as fromTimer from './timer.reducer';
import * as fromTraining from './training.reducer';
import * as fromRoot from 'app/reducers';
import { getSettingsState } from 'app/reducers';
import { AttentionTrainingType } from 'app/+attention-training/models/attention-training';
import { AttentionTrainingSettings } from 'app/settings/models/settings';

export interface AttentionTrainingState {
  list: fromList.State;
  timer: fromTimer.State;
  training: fromTraining.State;
}

export interface State extends fromRoot.State {
  attentionTraining: AttentionTrainingState;
}

export const reducers = {
  list: fromList.reducer,
  training: fromTraining.reducer,
  timer: fromTimer.reducer,
};

// region List Selectors
export const getAttentionTrainingState = createFeatureSelector<
  AttentionTrainingState
>('attentionTraining');

export const getListState = createSelector(
  getAttentionTrainingState,
  (state: AttentionTrainingState) => state.list,
);

export const {
  selectIds: getAttentionTrainingIds,
  selectEntities: getAttentionTrainingEntities,
  selectAll: getAllAttentionTrainings,
  selectTotal: getTotalAttentionTrainings,
} = fromList.adapter.getSelectors(getListState);

export const getAttentionTrainingLoading = createSelector(
  getListState,
  fromList.getLoading,
);
// endregion

// region Timer Selectors
export const getTimerState = createSelector(
  getAttentionTrainingState,
  (state: AttentionTrainingState) => state.timer,
);

export const getTimerIsInInitialState = createSelector(
  getTimerState,
  fromTimer.getIsInInitialState,
);

export const getTimerValue = createSelector(
  getTimerState,
  fromTimer.getCurrentValue,
);

export const getTimerValueInSeconds = createSelector(
  getTimerValue,
  value => value / 1000,
);

export const getTimerIsRunning = createSelector(
  getTimerState,
  fromTimer.getIsRunning,
);

export const getTimerIsStopped = createSelector(
  getTimerState,
  fromTimer.getIsStopped,
);
// endregion

// region Training Selectors
export const getTrainingState = createSelector(
  getAttentionTrainingState,
  (state: AttentionTrainingState) => state.training,
);

export const getIsBeginnerTraining = createSelector(
  getTrainingState,
  fromTraining.getIsBeginnerTrainig,
);

export const getIsAdvancedTraining = createSelector(
  getTrainingState,
  fromTraining.getIsAdvancedTrainig,
);
// endregion

// region Combined Selectors
export const getCurrentSoundChangeIntervalInSeconds = createSelector(
  getTrainingState,
  getSettingsState,
  (training, settings): number => {
    switch (training.trainingType) {
      case AttentionTrainingType.advanced: {
        return 10;
      }
      case AttentionTrainingType.beginner:
      default: {
        return 40;
      }
    }
  },
);
// endregion
