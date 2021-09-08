import { gql } from "@apollo/client";

export const PAYMENT_TYPE_ISACTIVE = gql`
  query ($isEnabled: Boolean) {
    paymentType(isEnabled: $isEnabled) {
      id
      name
      PaymentService {
        id
        name
        iconURL
      }
    }
  }
`;
