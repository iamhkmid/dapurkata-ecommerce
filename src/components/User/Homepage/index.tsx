import Image from "next/image";
import { useContext } from "react";
import NumberFormat from "react-number-format";
import { ThemeContext } from "../../../contexts/ThemeCtx";
import * as El from "./HomepageElement";

const Homepage = ({ data }) => {
  const {
    section1: { text1, text2, text3 },
  } = data;
  const { theme } = useContext(ThemeContext);
  return (
    <El.Main currTheme={theme}>
      <El.Section>
        <El.GroupText>
          <El.Text1>{text1}</El.Text1>
          <El.Text2>{text2}</El.Text2>
          <El.Text3>{text3}</El.Text3>
        </El.GroupText>
        <El.ImageContainer>
          <Image
            src="/img/banner.svg"
            alt="Cover"
            layout="fill"
            objectFit="contain"
          />
        </El.ImageContainer>
      </El.Section>
    </El.Main>
  );
};

export default Homepage;
