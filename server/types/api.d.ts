import {
  TAPIParamsBTBCA,
  TAPIParamsBTBNI,
  TAPIParamsBTBRI,
  TAPIParamsBTMandiriBill,
  TAPIParamsBTPermata,
  TAPIResBTBCA,
  TAPIResBTBNI,
  TAPIResBTBRI,
  TAPIResBTMandiriBill,
  TAPIResBTPermata,
  TDBBankTransfer,
} from "./midtrans";
import { TAPICity, TAPICost, TAPIProvince } from "./rajaOngkir";
import {
  TCustomerDetails,
  TItemDetails,
  TPaymentBT,
  TPaymentStore,
  TTransactionDetails,
} from "./transaction";

export type TAPI = {
  rajaOngkir: TAPIRajaOngkir;
  midtrans: TAPIMidtrans;
};

export type TAPIRajaOngkir = {
  getProvinces: () => Promise<TAPIProvince[]>;
  getProvince: (params: { province_id: string }) => Promise<TAPIProvince>;
  getCities: (params: { province_id?: string }) => Promise<TAPICity[]>;
  getCity: (params: {
    city_id: string;
    province_id?: string;
  }) => Promise<TAPICity>;
  getCost: (
    args = {
      origin: string,
      destination: string,
      weight: number,
      courier: string,
    }
  ) => Promise<TAPICost>;
};

export type TMidtransProps = {
  type: string;
  value: {
    transaction_details: TTransactionDetails;
    item_details: TItemDetails[];
    customer_details: TCustomerDetails;
  };
};
export type TAPIBankTransfer = {
  BNI: (data: TAPIParamsBTBNI) => Promise<TAPIResBTBNI>;
  BCA: (data: TAPIParamsBTBCA) => Promise<TAPIResBTBCA>;
  BRI: (data: TAPIParamsBTBRI) => Promise<TAPIResBTBRI>;
  MandiriBill: (data: TAPIParamsBTMandiriBill) => Promise<TAPIResBTMandiriBill>;
  Permata: (data: TAPIParamsBTPermata) => Promise<TAPIResBTPermata>;
};
export type TPaymentInfo = { name: string; value: string };
type TRMidtrans = {
  status_code: string;
  status_message: string;
  transaction_id: string;
  order_id: string;
  merchant_id?: string;
  gross_amount: string;
  currency: string;
  payment_type: string;
  transaction_time: string;
  transaction_status: string;
  fraud_status: string;
  paymentId: string;
  paymentInfo: TPaymentInfo[];
};

export type TAPIMidtrans = (props: TMidtransProps) => Promise<TRMidtrans>;

export type TMidtransPayType = TPaymentBT | TPaymentStore;
