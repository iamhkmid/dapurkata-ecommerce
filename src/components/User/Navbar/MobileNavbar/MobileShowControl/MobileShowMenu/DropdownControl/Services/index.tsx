import { useContext } from "react";
import { UserNavCtx } from "../../../../../../../../contexts/UserNavCtx";
import * as El from "./ServicesElement";

const Services = ({ active }) => {
  const { dispatch } = useContext(UserNavCtx);
  return (
    <El.Main onClick={(e) => e.stopPropagation()} active={active}>
      <El.Ul
        onClick={() => {
          dispatch({ type: "CLOSE_MENU" });
        }}
      >
        <El.Li>
          <El.NLink href="/#section2-1">
            <El.Anchor>Spesifikasi Naskah</El.Anchor>
          </El.NLink>
        </El.Li>
        <El.Li>
          <El.NLink href="/#section2-2">
            <El.Anchor>Paket Kreator</El.Anchor>
          </El.NLink>
        </El.Li>
        <El.Li>
          <El.NLink href="/#section2-3">
            <El.Anchor>Layanan</El.Anchor>
          </El.NLink>
        </El.Li>
      </El.Ul>
    </El.Main>
  );
};

export default Services;
