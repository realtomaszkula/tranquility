import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { AttentionTraining } from '../model';

import { AttentionTrainingTypes, AttentionTrainingActions } from './actions';

// tslint:disable-next-line:no-empty-interface
export interface State extends EntityState<AttentionTraining> {
  loading: boolean;
  loaded: boolean;
}

export const adapter: EntityAdapter<AttentionTraining> = createEntityAdapter<
  AttentionTraining
>();

export const initialState: State = adapter.getInitialState({
  loading: false,
  loaded: false,
});

export function reducer(
  state = initialState,
  action: AttentionTrainingActions,
): State {
  switch (action.type) {
    case AttentionTrainingTypes.LoadAttentionTrainingsComplete: {
      return adapter.addMany(action.payload, state);
    }

    case AttentionTrainingTypes.AddAttentionTraining:
    case AttentionTrainingTypes.DeleteAttentionTrainingError: {
      return adapter.addOne(action.payload, state);
    }

    case AttentionTrainingTypes.DeleteAttentionTraining:
    case AttentionTrainingTypes.AddAttentionTrainingError: {
      return adapter.removeOne(action.payload.id, state);
    }

    default: {
      return state;
    }
  }
}

export const getLoaded = (state: State) => state.loaded;
export const getLoading = (state: State) => state.loading;
