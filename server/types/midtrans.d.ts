type TAPIResBTBill = {
  bill_key: string;
  biller_code: string;
};

type TAPIResBTVaNum = {
  va_numbers: {
    bank: string;
    va_number: string;
  }[];
};

type TAPIResBTVaNumPermata = {
  permata_va_number: string;
};

type TAPIResBTOther = {
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
};

type TAPIParamsBT = {
  transaction_details: { order_id: string; gross_amount: number };
  customer_details?: {
    email?: string;
    first_name: string;
    last_name?: string;
    phone?: string;
  };
  item_details?: {
    id: string;
    price: number;
    quantity: number;
    name: string;
  }[];
};

type TAPIParamsEchannel = {
  echannel: {
    bill_info1: string;
    bill_info2: string;
  };
};

//Parameters
export type TAPIParamsBTBNI = TAPIParamsBT;
export type TAPIParamsBTBCA = TAPIParamsBT;
export type TAPIParamsBTBRI = TAPIParamsBT;
export type TAPIParamsBTPermata = TAPIParamsBT;
export type TAPIParamsBTMandiriBill = TAPIParamsEchannel & TAPIParamsBT;

//Response
export type TAPIResBTBNI = TAPIResBTVaNum & TAPIResBTOther;
export type TAPIResBTBCA = TAPIResBTVaNum & TAPIResBTOther;
export type TAPIResBTBRI = TAPIResBTVaNum & TAPIResBTOther;
export type TAPIResBTMandiriBill = TAPIResBTBill & TAPIResBTOther;
export type TAPIResBTPermata = TAPIResBTVaNumPermata & TAPIResBTOther;
