import { TUserNavRdcr, TUserNavState } from "../types/context";

export const reducer: TUserNavRdcr = (state, action) => {
  switch (action.type) {
    case "SHOW_MENU":
      return {
        ...state,
        menu: action.value === state.menu ? null : action.value,
      };
    case "CLOSE_MENU":
      return { ...state, menu: null };
    case "SHOW_POPUP":
      return { ...state, popup: action.value };
    case "SHOW_GLOBAL_MESSAGE":
      return {
        ...state,
        globalMessage: {
          isShowed: true,
          message: action.value.message,
          color: action.value.color,
        },
      };
    case "CLOSE_GLOBAL_MESSAGE":
      return {
        ...state,
        globalMessage: { color: null, message: null, isShowed: false },
      };
    case "CLOSE_POPUP":
      return { ...state, popup: { name: null, value: null } };
    default:
      return state;
  }
};

export const initialValue: TUserNavState = {
  menu: null,
  popup: { name: null, value: null, onClose: null, onCloseValue: null },
  globalMessage: { color: null, message: null, isShowed: false },
};
