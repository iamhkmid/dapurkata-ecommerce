import { TAdminNavRdcr, TAdminNavState } from "../types/context";

export const reducer: TAdminNavRdcr = (state, action) => {
  switch (action.type) {
    case "OPEN_SIDEBAR":
      return { ...state, showSidebar: true };
    case "CLOSE_SIDEBAR":
      return { ...state, showSidebar: false };
    case "SIDEBAR_TOGGLER":
      return { ...state, showSidebar: !state.showSidebar };
    case "SHOW_POPUP":
      return { ...state, showPopUp: action.value };
    case "CLOSE_POPUP":
      return { ...state, showPopUp: { name: null, value: null } };
    default:
      return state;
  }
};

export const initialValue: TAdminNavState = {
  showSidebar: true,
  showPopUp: { name: null, value: null, onClose: null, onCloseValue: null },
};
