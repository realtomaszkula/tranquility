import { TrainingActions, TrainingTypes } from '../actions/training.actions';
import { AttentionTrainingType } from '../models/attention-training';

export interface State {
  trainingType: AttentionTrainingType;
}

export const initialState: State = {
  trainingType: AttentionTrainingType.beginner,
};

export function reducer(state = initialState, action: TrainingActions): State {
  switch (action.type) {
    case TrainingTypes.setType: {
      return {
        trainingType: action.payload.trainingType,
      };
    }

    default: {
      return state;
    }
  }
}

export const getIsBeginnerTrainig = (state: State) =>
  state.trainingType === AttentionTrainingType.beginner;

export const getIsAdvancedTrainig = (state: State) =>
  state.trainingType === AttentionTrainingType.advanced;
