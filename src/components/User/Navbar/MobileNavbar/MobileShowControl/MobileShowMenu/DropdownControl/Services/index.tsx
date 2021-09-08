import { useContext } from "react";
import { UserNavCtx } from "../../../../../../../../contexts/UserNavCtx";
import * as El from "./ServicesElement";

const Services = ({ active }) => {
  const { setShowDdown, setShowNav } = useContext(UserNavCtx);
  return (
    <El.Main onClick={(e) => e.stopPropagation()} active={active}>
      <El.Ul
        onClick={() => {
          setShowNav(null);
          setShowDdown(null);
        }}
      >
        <El.Li>
          <El.NLink href="/layanan-kami">
            <El.Anchor>Spesifikasi Naskah</El.Anchor>
          </El.NLink>
        </El.Li>
        <El.Li>
          <El.NLink href="/layanan-kami">
            <El.Anchor>Paket Kreator</El.Anchor>
          </El.NLink>
        </El.Li>
        <El.Li>
          <El.NLink href="/layanan-kami">
            <El.Anchor>Layanan</El.Anchor>
          </El.NLink>
        </El.Li>
      </El.Ul>
    </El.Main>
  );
};

export default Services;
