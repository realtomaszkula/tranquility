import { createSelector, createFeatureSelector } from '@ngrx/store';

import * as fromAttentionTraining from './reducer';

export const getAttentionTrainingState = createFeatureSelector<
  fromAttentionTraining.State
>('attentionTraining');

export const {
  selectIds: getAttentionTrainingIds,
  selectEntities: getAttentionTrainingEntities,
  selectAll: getAllAttentionTrainings,
  selectTotal: getTotalAttentionTrainings,
} = fromAttentionTraining.adapter.getSelectors(getAttentionTrainingState);

export const getCollectionLoaded = createSelector(
  getAttentionTrainingState,
  fromAttentionTraining.getLoaded,
);
export const getCollectionLoading = createSelector(
  getAttentionTrainingState,
  fromAttentionTraining.getLoading,
);
