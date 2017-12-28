import { createSelector, createFeatureSelector } from '@ngrx/store';

import * as fromAttentionTraining from './reducer';
import * as fromRoot from 'app/reducers';

export const getAttentionTrainingState = createFeatureSelector<
  fromAttentionTraining.State
>('attentionTraining');

export const {
  selectIds: getAttentionTrainingIds,
  selectEntities: getAttentionTrainingEntities,
  selectAll: getAllAttentionTrainings,
  selectTotal: getTotalAttentionTrainings,
} = fromAttentionTraining.adapter.getSelectors(getAttentionTrainingState);

export const getAttentionTrainingLoading = createSelector(
  getAttentionTrainingState,
  fromAttentionTraining.getLoading,
);
