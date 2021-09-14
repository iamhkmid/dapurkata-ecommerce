import { ApolloError } from "@apollo/client";
import { Dispatch } from "react";
import { TUser } from "./auth";
import { TOrderBook } from "./book";
import { TPaymentService, TPaymentType } from "./payment";
import { TRecipient } from "./recipient";
import { TCart } from "./shoppingCart";
import { TAuthUser } from "./user";

// AUTH CONTEXT
export type TAuthContext = {
  loading: boolean;
  setLoading: (isLoading: boolean) => void;
  user: TAuthUser;
  setUser: (user: TUser) => void;
  error: string;
  setError: (params: string) => void;
};

// SHOPPINGCART CONTEXT
type TSCartAction =
  | { type: "SET_SCART"; value: TCart[] }
  | { type: "SET_SCART_WEIGHT"; value: number }
  | { type: "CLEAR_SCART" }
  | { type: "SET_LOADING_SCART"; value: boolean }
  | { type: "CLEAR_LOADING_SCART" }
  | { type: "SET_ERROR_SCART"; value: ApolloError }
  | { type: "CLEAR_ERROR_SCART" };
export type TSCartRdcr = (
  state: TSCartState,
  action: TSCartAction
) => TSCartState;
type TSCartState = {
  data: TCart[];
  weight: number;
  loading: boolean;
  error: ApolloError;
};
export type TShoppingCartCtx = {
  shoppingCart: TSCartState;
  dispatch: Dispatch<TSCartAction>;
};

// APOLLO CLIENT CONTEXT
export type TApolloClientCtx = {
  isLoggin: boolean;
  setIsLoggin: (val: boolean) => void;
};

// ORDER CONTEXT
type TCourier = {
  code: string;
  name: string;
  cost: number;
  service: string;
  etd: string;
  description: string;
};

type TOrderType =
  | { type: "shoppingcart" }
  | {
      type: "buy-now";
      amount: number;
      book: TOrderBook;
      weight: number;
    };

export type TOrderState = {
  recipient: {
    selected: { id: string };
    data: { recipient: TRecipient; recipients: TRecipient[] };
    loading: boolean;
    error: string;
  };
  courier: {
    selected: { code: string; courier: TCourier };
    loading: boolean;
    error: string;
  };
  payment: {
    selected: { paymentTypeId: string; paymentServiceId: string };
    data: { paymentTypes: TPaymentType[]; paymentServices: TPaymentService[] };
    loading: boolean;
    error: string;
  };
  order: TOrderType & {
    recipientId: string;
    loading: boolean;
    error: string;
  };
};
type TOrderAction =
  | { type: "SET_ORDER_TYPE"; value: TOrderType }
  | { type: "SET_RECIPIENT_ID"; value: string }
  | { type: "SET_ORDER_LOADING"; value: boolean }
  | { type: "SET_RECIPIENTS"; value: TRecipient[] }
  | { type: "SET_RECIPIENT_LOADING"; value: boolean }
  | { type: "SET_COURIER_CODE"; value: string }
  | { type: "SET_COURIER_SERVICE"; value: TCourier }
  | { type: "SET_COURIER_LOADING"; value: boolean }
  | { type: "SET_COURIER_ERROR"; value: string }
  | { type: "SET_PAYMENT_TYPE_ID"; value: string }
  | { type: "SET_PAYMENT_SERVICE_ID"; value: string }
  | { type: "SET_PAYMENT_TYPES"; value: TPaymentType[] }
  | { type: "SET_PAYMENT_SERVICES"; value: TPaymentService[] }
  | { type: "SET_PAYMENT_LOADING"; value: boolean }
  | { type: "SET_PAYMENT_ERROR"; value: string }
  | { type: "CLEAR_ORDER" };

export type TOrderRdcr = (
  state: TOrderState,
  action: TOrderAction
) => TOrderState;

export type TOrderCtx = {
  order: TOrderState;
  dispatch: Dispatch<TOrderAction>;
};

// ADMIN NAV CONTEXT
type TAdminPopUpVal =
  | "bookUpdate"
  | "bookDelete"
  | "bookDetail"
  | "categoryUpdate"
  | "categoryDelete"
  | "categoryDetail"
  | "authorUpdate"
  | "authorDelete"
  | "authorDetail"
  | "USER_DETAIL";

type TAdminShowPopUp = {
  name: TAdminPopUpVal;
  value?: string;
  onClose?: TAdminPopUpVal;
  onCloseValue?: string;
};
export type TAdminNavState = {
  showSidebar: boolean;
  showPopUp: TAdminShowPopUp;
};
type TAdminNavAction =
  | { type: "OPEN_SIDEBAR" }
  | { type: "CLOSE_SIDEBAR" }
  | { type: "SIDEBAR_TOGGLER" }
  | { type: "SHOW_POPUP"; value: TAdminShowPopUp }
  | { type: "CLOSE_POPUP" };

export type TAdminNavRdcr = (
  state: TAdminNavState,
  action: TAdminNavAction
) => TAdminNavState;

export type TAdminNavCtx = {
  adminNav: TAdminNavState;
  dispatch: Dispatch<TAdminNavAction>;
};

// USER NAV CONTEXT
type TUserPopUpVal =
  | "CHANGE_RECIPIENT"
  | "ADD_RECIPIENT"
  | "EDIT_RECIPIENT"
  | "MESSAGE"
  | "AUTH_ERROR"
  | "ORDER_DETAIL"
  | "BOOK_DETAIL"
  | "CHANGE_PASSWORD";
type TUserPopUp = {
  name: TUserPopUpVal;
  value?: string;
  onClose?: TUserPopUpVal;
  onCloseValue?: string;
};
type TUserMenu = "MENU" | "CART" | "MAIL" | "SERVICES";
type TUserDropdown = "SERVICES";
type TUserNavAction =
  | { type: "SHOW_MENU"; value: TUserMenu }
  | { type: "CLOSE_MENU" }
  | { type: "SHOW_POPUP"; value: TUserPopUp }
  | { type: "CLOSE_POPUP" };
export type TUserNavState = {
  showMenu: TUserMenu;
  showPopUp: TUserPopUp;
};
export type TUserNavRdcr = (
  state: TUserNavState,
  action: TUserNavAction
) => TUserNavState;

export type TUserNavCtx = {
  userNav: TUserNavState;
  dispatch: Dispatch<TUserNavAction>;
};
