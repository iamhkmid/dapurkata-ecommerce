import Image from "next/image";
import { useContext } from "react";
import NumberFormat from "react-number-format";
import { ThemeContext } from "../../../contexts/ThemeCtx";
import IconsControl from "../../IconsControl";
import Button from "../../otherComps/Buttons/Button";
import * as El from "./HomepageElement";

const Homepage = ({ data }) => {
  const {
    section1: { text1, text2, text3 },
  } = data;
  const { theme } = useContext(ThemeContext);
  return (
    <El.Main currTheme={theme}>
      <El.Section1
        bgUrl={
          theme === "dark"
            ? `${process.env.NEXT_PUBLIC_GQL_HTTP_URL}/img/home_dark.svg`
            : `${process.env.NEXT_PUBLIC_GQL_HTTP_URL}/img/home_light.svg`
        }
      >
        <El.GroupText>
          <El.Text1
            initial={{ opacity: 0, y: "10px" }}
            animate={{ opacity: 1, y: "0" }}
            transition={{ ease: "easeIn", duration: 0.4 }}
          >
            {text1}
          </El.Text1>
          <El.Text2
            initial={{ opacity: 0, y: "10px" }}
            animate={{ opacity: 1, y: "0" }}
            transition={{ ease: "easeIn", duration: 0.4, delay: 0.2 }}
          >
            {text2}
          </El.Text2>
          {/* <El.Text3>{text3}</El.Text3> */}
        </El.GroupText>
        <El.ImageContainer
          initial={{ opacity: 0, y: "10px" }}
          animate={{ opacity: 1, y: "0" }}
          transition={{ ease: "easeIn", duration: 0.4, delay: 0.4 }}
        >
          <Image
            src="/img/banner.svg"
            alt="Cover"
            layout="fill"
            objectFit="contain"
          />
        </El.ImageContainer>
        <El.ButtonWrapper
          initial={{ opacity: 0, y: "10px" }}
          animate={{ opacity: 1, y: "0" }}
          transition={{ ease: "easeIn", duration: 0.4, delay: 0.6 }}
        >
          <div className="button-home">
            <Button type="button" name="Pesan Sekarang" color="primary" />
            <Button type="button" name="Paket Penerbitan" color="list" />
          </div>
          <El.ChevronDown>
            {IconsControl("chevron-down-outline")}
          </El.ChevronDown>
        </El.ButtonWrapper>
      </El.Section1>
      <El.Section2></El.Section2>
    </El.Main>
  );
};

export default Homepage;
