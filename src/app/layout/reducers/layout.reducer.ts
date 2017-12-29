import { LayoutTypes, LayoutActions } from '../actions/layout.actions';

export interface State {
  showSidenav: boolean;
  showFab: boolean;
  fabIcon: string | null;
}

export const initialState: State = {
  showSidenav: false,
  showFab: false,
  fabIcon: '',
};

export function reducer(state = initialState, action: LayoutActions): State {
  switch (action.type) {
    case LayoutTypes.OpenSidenav: {
      return {
        ...state,
        showSidenav: true,
      };
    }
    case LayoutTypes.CloseSidenav: {
      return {
        ...state,
        showSidenav: false,
      };
    }
    case LayoutTypes.ShowFab: {
      return {
        ...state,
        showFab: true,
        fabIcon: action.payload.fabIcon,
      };
    }
    case LayoutTypes.HideFab: {
      return {
        ...state,
        showFab: false,
        fabIcon: '',
      };
    }
    default:
      return state;
  }
}

export const getShowSidenav = (state: State) => state.showSidenav;
export const getShowFab = (state: State) => state.showFab;
export const getFabIcon = (state: State) => state.fabIcon;
