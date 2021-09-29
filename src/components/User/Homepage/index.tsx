import Image from "next/image";
import { useContext } from "react";
import NumberFormat from "react-number-format";
import { ThemeContext } from "../../../contexts/ThemeCtx";
import Button from "../../otherComps/Buttons/Button";
import * as El from "./HomepageElement";

const Homepage = ({ data }) => {
  const {
    section1: { text1, text2, text3 },
  } = data;
  const { theme } = useContext(ThemeContext);
  return (
    <El.Main currTheme={theme}>
      <El.Section1>
        <El.Background>
          <div>
            <Image
              src={
                theme === "dark"
                  ? `${process.env.NEXT_PUBLIC_GQL_HTTP_URL}/img/home_dark.svg`
                  : `${process.env.NEXT_PUBLIC_GQL_HTTP_URL}/img/home_light.svg`
              }
              layout="fill"
              objectFit="cover"
              quality={75}
            />
          </div>
        </El.Background>
        <El.GroupText>
          <El.Text1>{text1}</El.Text1>
          <El.Text2>{text2}</El.Text2>
          {/* <El.Text3>{text3}</El.Text3> */}
        </El.GroupText>
        <El.ImageContainer>
          <Image
            src="/img/banner.svg"
            alt="Cover"
            layout="fill"
            objectFit="contain"
          />
        </El.ImageContainer>
        <El.ButtonWrapper>
          <Button type="button" name="Pesan Sekarang" color="primary" />
          <Button type="button" name="Paket Penerbitan" color="list" />
        </El.ButtonWrapper>
      </El.Section1>
      <El.Section2></El.Section2>
    </El.Main>
  );
};

export default Homepage;
