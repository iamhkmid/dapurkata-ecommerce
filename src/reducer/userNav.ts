import { TUserNavRdcr, TUserNavState } from "../types/context";

export const reducer: TUserNavRdcr = (state, action) => {
  switch (action.type) {
    case "SHOW_MENU":
      return {
        ...state,
        showMenu: action.value === state.showMenu ? null : action.value,
      };
    case "CLOSE_MENU":
      return { ...state, showMenu: null };
    case "SHOW_POPUP":
      return { ...state, showPopUp: action.value };
    case "CLOSE_POPUP":
      return { ...state, showPopUp: { name: null, value: null } };
    default:
      return state;
  }
};

export const initialValue: TUserNavState = {
  showMenu: null,
  showPopUp: { name: null, value: null, onClose: null, onCloseValue: null },
};
