import { Action } from '@ngrx/store';

export enum LayoutTypes {
  OpenSidenav = '[Sidenav] open',
  CloseSidenav = '[Sidenav] close',
  ShowFab = '[Fab] show',
  HideFab = '[Fab] hide',
  ClickFab = '[Fab] click',
  ShowFabMini = '[FabMini] show',
  HideFabMini = '[FabMini] hide',
  ClickFabMini = '[FabMini] click',
}

/* Sidenav */
export class OpenSidenav implements Action {
  readonly type = LayoutTypes.OpenSidenav;
}

export class CloseSidenav implements Action {
  readonly type = LayoutTypes.CloseSidenav;
}

/* Fab */
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

/* FabMini  */
export class ShowFabMini implements Action {
  readonly type = LayoutTypes.ShowFabMini;

  constructor(public payload: { fabMiniIcon: string }) {}
}

export class HideFabMini implements Action {
  readonly type = LayoutTypes.HideFabMini;
}

export class ClickFabMini implements Action {
  readonly type = LayoutTypes.ClickFabMini;
}

export type LayoutActions =
  | OpenSidenav
  | CloseSidenav
  | ShowFab
  | HideFab
  | ClickFab
  | ShowFabMini
  | HideFabMini
  | ClickFabMini;
