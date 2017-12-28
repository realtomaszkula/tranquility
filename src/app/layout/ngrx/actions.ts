import { Action } from '@ngrx/store';

export enum LayoutActionTypes {
  OpenSidenav = '[Layout] Open Sidenav',
  CloseSidenav = '[Layout] Close Sidenav',
  FabClick = '[Layout] FabClick',
}

export class OpenSidenav implements Action {
  readonly type = LayoutActionTypes.OpenSidenav;
}

export class CloseSidenav implements Action {
  readonly type = LayoutActionTypes.CloseSidenav;
}

export class FabClick implements Action {
  readonly type = LayoutActionTypes.FabClick;
}

export type LayoutActions = OpenSidenav | CloseSidenav | FabClick;
