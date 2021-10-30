import Image from "next/image";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import NumberFormat from "react-number-format";
import { ThemeContext } from "../../../contexts/ThemeCtx";
import IconsControl from "../../IconsControl";
import Button from "../../otherComps/Buttons/Button";
import * as El from "./HomepageElement";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";

const Homepage = ({ data }) => {
  const {
    section1: { text1, text2, text3 },
  } = data;
  const { theme } = useContext(ThemeContext);
  const { push } = useRouter();
  return (
    <El.Main currTheme={theme}>
      <El.Section1
        id="section1"
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
            layout="responsive"
            objectFit="fill"
            width="300"
            height="180"
          />
        </El.ImageContainer>
        <El.ButtonWrapper
          initial={{ opacity: 0, y: "10px" }}
          animate={{ opacity: 1, y: "0" }}
          transition={{ ease: "easeIn", duration: 0.4, delay: 0.6 }}
        >
          <div className="button-home">
            <Button
              type="button"
              name="Pesan Sekarang"
              color="primary"
              onClick={() => push("https://wa.link/lc00fi")}
            />
            <Button
              type="button"
              name="Paket Penerbitan"
              color="list"
              onClick={() => push("/#section2-2")}
            />
          </div>
          <El.ChevronDown onClick={() => push("/#section2-1")}>
            {IconsControl("chevron-down-outline")}
          </El.ChevronDown>
        </El.ButtonWrapper>
      </El.Section1>
      <El.Section>
        <div id="section2-1" className="scroll-point" />
        <Section2 />
      </El.Section>
      <El.Section>
        <div id="section2-2" className="scroll-point" />
        <Section3 />
      </El.Section>
      <El.Section>
        <div id="section2-3" className="scroll-point" />
        <Section4 />
      </El.Section>
    </El.Main>
  );
};

export default Homepage;
