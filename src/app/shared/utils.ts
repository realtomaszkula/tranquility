import { RouterStateSerializer } from '@ngrx/router-store';
import {
  RouterStateSnapshot,
  Params,
  ActivatedRouteSnapshot,
} from '@angular/router';

export interface RouterStateUrl {
  url: string;
  queryParams: Params;
  lastRouteData: object;
}

export class CustomRouterStateSerializer
  implements RouterStateSerializer<RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    const { url } = routerState;
    const queryParams = routerState.root.queryParams;

    let route: ActivatedRouteSnapshot = routerState.root.firstChild;
    while (route.firstChild) {
      route = route.firstChild;
    }

    return { url, queryParams, lastRouteData: route.data };
  }
}
