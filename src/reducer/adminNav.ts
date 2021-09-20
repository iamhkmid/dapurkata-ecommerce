import { TAdminNavRdcr, TAdminNavState } from "../types/context";

export const reducer: TAdminNavRdcr = (state, action) => {
  switch (action.type) {
    case "OPEN_SIDEBAR":
      return { ...state, sidebar: true };
    case "CLOSE_SIDEBAR":
      return { ...state, sidebar: false };
    case "SIDEBAR_TOGGLER":
      return { ...state, sidebar: !state.sidebar };
    case "SHOW_POPUP":
      return { ...state, popup: action.value };
    case "CLOSE_POPUP":
      return { ...state, popup: { name: null, value: null } };
    default:
      return state;
  }
};

export const initialValue: TAdminNavState = {
  sidebar: true,
  popup: { name: null, value: null, onClose: null, onCloseValue: null },
};
