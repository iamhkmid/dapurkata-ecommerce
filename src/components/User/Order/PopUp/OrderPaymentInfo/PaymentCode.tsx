import { FC } from "react";
import styled from "styled-components";

type Props = {
  paymentService: string;
  paymentType: string;
  data: { name: string; value: string }[];
};

const PaymentCode: FC<Props> = (props) => {
  const { data, paymentService, paymentType } = props;
  const payment = `${paymentType} - ${paymentService}`;

  switch (payment) {
    case "ATM/Bank Transfer - BCA": {
      return <BankTransferType1 data={data} />;
    }
    case "ATM/Bank Transfer - BNI": {
      return <BankTransferType1 data={data} />;
    }
    case "ATM/Bank Transfer - BRI": {
      return <BankTransferType1 data={data} />;
    }
    case "ATM/Bank Transfer - Permata": {
      return <BankTransferType1 data={data} />;
    }
    case "ATM/Bank Transfer - Mandiri Bill": {
      return <BankTransferType2 data={data} />;
    }

    default:
      return null;
  }
};

export default PaymentCode;

type TPCode = {
  data: { name: string; value: string }[];
};
const BankTransferType1: FC<TPCode> = ({ data }) => (
  <Main>
    <Section>
      <Label>Kode Pembayaran</Label>
      <Code>
        <div>
          <div className="name">VA NUMBER</div>
          <div className="value">
            {data.find((val) => val.name === "va_number")?.value}
          </div>
        </div>
      </Code>
    </Section>
  </Main>
);

const BankTransferType2: FC<TPCode> = ({ data }) => (
  <Main>
    <Section>
      <Label>Kode Pembayaran</Label>
      <Code>
        <div>
          <div className="name">BILLER CODE</div>
          <div className="value bill-code">
            {data.find((val) => val.name === "biller_code")?.value}
          </div>
        </div>
        <div>
          <div className="name">BILL KEY</div>
          <div className="value">
            {data.find((val) => val.name === "bill_key")?.value}
          </div>
        </div>
      </Code>
    </Section>
  </Main>
);

const Main = styled.div`
  display: flex;
  padding-top: 0.5rem;
  padding-bottom: 1rem;
  border-bottom: 2px dashed ${({ theme }) => theme.border[2]};
`;
const Section = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
const Label = styled.h1`
  color: ${({ theme }) => theme.color[2]};
  font-size: 0.9rem;
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    font-size: 0.8rem;
  }
`;

const Code = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 1rem;
  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
  > div > div.name {
    color: ${({ theme }) => theme.color[2]};
    font-size: 0.8rem;
    font-weight: 600;
    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      font-size: 0.7rem;
    }
  }
  > div > div.value {
    background: ${({ theme }) => theme.background[1]};
    border-radius: ${({ theme }) => theme.borderRadius};
    padding: 0.8rem 2rem;
    min-width: 50%;
    text-align: center;
    font-weight: 600;
    color: ${({ theme }) => theme.color[8]};
    font-size: 2rem;
    line-height: 1;
    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      font-size: 1.5rem;
    }
  }
  > div > div.value.bill-code {
    font-size: 1.8rem;
    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      font-size: 1.3rem;
    }
  }
`;
