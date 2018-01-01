import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { AttentionTraining } from '../models/attention-training';
import {
  AttentionTrainingTypes,
  AttentionTrainingActions,
} from '../actions/list.actions';

export interface State extends EntityState<AttentionTraining> {
  loading: boolean;
}

export const adapter: EntityAdapter<AttentionTraining> = createEntityAdapter<
  AttentionTraining
>({
  sortComparer: ({ id: a }, { id: b }): number => b - a,
});

export const initialState: State = adapter.getInitialState({
  loading: false,
});

export function reducer(
  state = initialState,
  action: AttentionTrainingActions,
): State {
  switch (action.type) {
    case AttentionTrainingTypes.LoadAttentionTrainings:
    case AttentionTrainingTypes.AddAttentionTraining:
    case AttentionTrainingTypes.DeleteAttentionTraining: {
      return {
        ...state,
        loading: true,
      };
    }

    case AttentionTrainingTypes.LoadAttentionTrainingsComplete: {
      return {
        ...adapter.addAll(action.payload, state),
        loading: false,
      };
    }

    case AttentionTrainingTypes.AddAttentionTrainingComplete: {
      return {
        ...adapter.addOne(action.payload, state),
        loading: false,
      };
    }

    case AttentionTrainingTypes.DeleteAttentionTrainingComplete: {
      return {
        ...adapter.removeOne(action.payload.id, state),
        loading: false,
      };
    }

    case AttentionTrainingTypes.AddAttentionTrainingError:
    case AttentionTrainingTypes.DeleteAttentionTrainingError:
    case AttentionTrainingTypes.LoadAttentionTrainingsError: {
      return {
        ...state,
        loading: false,
      };
    }

    default: {
      return state;
    }
  }
}

export const getLoading = (state: State) => state.loading;
