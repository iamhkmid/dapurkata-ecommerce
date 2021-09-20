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
    case "SHOW_MESSAGE":
      return {
        ...state,
        message: { message: action.value.message, color: action.value.color },
      };
    case "CLOSE_MESSAGE":
      return {
        ...state,
        message: { color: null, message: null },
      };
    case "CLOSE_POPUP":
      return { ...state, showPopUp: { name: null, value: null } };
    default:
      return state;
  }
};

export const initialValue: TUserNavState = {
  showMenu: null,
  showPopUp: { name: null, value: null, onClose: null, onCloseValue: null },
  message: { color: null, message: null },
};
