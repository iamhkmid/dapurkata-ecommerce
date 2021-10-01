import { gql } from "@apollo/client";

export const FOOTERINFO_BY_USER = gql`
  query {
    footerPhone {
      id
      type
      phone
    }
    footerAddress {
      id
      type
      address
    }
    footerMessage {
      id
      type
      message
    }
    footerSocialMedia {
      id
      type
      name
      url
      isEnabled
    }
  }
`;
