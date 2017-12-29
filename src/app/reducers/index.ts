import {
  ActionReducerMap,
  createSelector,
  createFeatureSelector,
  ActionReducer,
  MetaReducer,
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { RouterStateUrl } from '../shared/utils';
import * as fromRouter from '@ngrx/router-store';
import * as fromLayout from '../layout/reducers/layout.reducer';

import { storeFreeze } from 'ngrx-store-freeze';

export interface State {
  router: fromRouter.RouterReducerState<RouterStateUrl>;
  layout: fromLayout.State;
}

export const reducers: ActionReducerMap<State> = {
  router: fromRouter.routerReducer,
  layout: fromLayout.reducer,
};

export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return function(state: State, action: any): State {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}
export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [logger, storeFreeze]
  : [];

export const getRouterState = createFeatureSelector<
  fromRouter.RouterReducerState<RouterStateUrl>
>('router');

export const getCurrentUrl = createSelector(
  getRouterState,
  (router: fromRouter.RouterReducerState<RouterStateUrl>) =>
    router && router.state && router.state.url,
);

export const getCurrentQueryParams = createSelector(
  getRouterState,
  (router: fromRouter.RouterReducerState<RouterStateUrl>) =>
    router && router.state && router.state.queryParams,
);

export const getLayoutState = createFeatureSelector<fromLayout.State>('layout');

export const getShowSidenav = createSelector(
  getLayoutState,
  fromLayout.getShowSidenav,
);

export const getShowFab = createSelector(getLayoutState, fromLayout.getShowFab);
export const getFabIcon = createSelector(getLayoutState, fromLayout.getFabIcon);
