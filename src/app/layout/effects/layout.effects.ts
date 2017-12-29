import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { ROUTER_NAVIGATION, RouterNavigationAction } from '@ngrx/router-store';
import { switchMap, map, tap } from 'rxjs/operators';

import { FabButtonData } from 'app/layout/models/fab-button';
import { FabMiniButtonData } from 'app/layout/models/fab-mini-button';
import {
  ShowFab,
  HideFab,
  ShowFabMini,
  HideFabMini,
} from '../actions/layout.actions';
import {} from '../actions/layout.actions';
import { RouterStateUrl } from 'app/shared/utils';

@Injectable()
export class LayoutEffects {
  @Effect()
  fabVisible$: Observable<Action> = this.actions$
    .ofType(ROUTER_NAVIGATION)
    .pipe(
      map(
        (action: RouterNavigationAction<RouterStateUrl>) =>
          action.payload.routerState.lastRouteData,
      ),
      map(
        (data: FabButtonData) =>
          data && data.showFab && data.fabIcon
            ? new ShowFab({ fabIcon: data.fabIcon })
            : new HideFab(),
      ),
    );

  @Effect()
  fabMiniVisible$: Observable<Action> = this.actions$
    .ofType(ROUTER_NAVIGATION)
    .pipe(
      map(
        (action: RouterNavigationAction<RouterStateUrl>) =>
          action.payload.routerState.lastRouteData,
      ),
      map(
        (data: FabMiniButtonData) =>
          data && data.showFabMini && data.fabMiniIcon
            ? new ShowFabMini({ fabMiniIcon: data.fabMiniIcon })
            : new HideFabMini(),
      ),
    );

  constructor(private actions$: Actions) {}
}
