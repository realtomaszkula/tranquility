import { Observable } from 'rxjs/Observable';
import { map, take, filter, switchMap } from 'rxjs/operators';
import {
  ActivatedRoute,
  Router,
  RouterEvent,
  NavigationEnd,
} from '@angular/router';

export const lastActivatedRouteData = (activatedRoute: ActivatedRoute) => (
  source: Observable<RouterEvent>,
) => {
  return source.pipe(
    filter(e => e instanceof NavigationEnd),
    map(() => activatedRoute),
    map(route => {
      while (route.firstChild) {
        route = route.firstChild;
      }
      return route;
    }),
    filter(route => route.outlet === 'primary'),
    switchMap(route => route.data),
  );
};
