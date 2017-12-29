import { Action } from '@ngrx/store';

export enum LayoutTypes {
  OpenSidenav = '[Sidenav] open',
  CloseSidenav = '[Sidenav] close',
  ShowFab = '[Fab] show',
  HideFab = '[Fab] hide',
  ClickFab = '[Fab] click',
}

export class OpenSidenav implements Action {
  readonly type = LayoutTypes.OpenSidenav;
}

export class CloseSidenav implements Action {
  readonly type = LayoutTypes.CloseSidenav;
}

export class ShowFab implements Action {
  readonly type = LayoutTypes.ShowFab;

  constructor(public payload: { fabIcon: string }) {}
}

export class HideFab implements Action {
  readonly type = LayoutTypes.HideFab;
}

export class ClickFab implements Action {
  readonly type = LayoutTypes.ClickFab;
}

export type LayoutActions =
  | OpenSidenav
  | CloseSidenav
  | ShowFab
  | HideFab
  | ClickFab;
