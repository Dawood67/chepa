import { MainCol, MainContainer, MainRow } from "components/common";
import React from "react";
import { BuyBtn, ImgWrapper, MainSection, Text, Title } from "./elements";
import { Image } from "react-bootstrap";
import { herogif } from "assets";

const HeroComp = () => {
  return (
    <MainSection>
      <MainContainer>
        <MainRow>
          <MainCol lg={6} className="left-div">
            <div className="hero-div">
              <Title>$CHEPA</Title>
              <Text>
                Discover the captivating alter ego of our
                <br /> favorite meme coin, $chepa, when it
                <br /> embraces its air forces and unveils its true
                <br /> colors. Join the excitement now!
              </Text>
              <BuyBtn>bUY $CHEPA</BuyBtn>
            </div>
          </MainCol>
          <MainCol lg={6}>
            <ImgWrapper>
              <Image src={herogif} />
            </ImgWrapper>
          </MainCol>
        </MainRow>
      </MainContainer>
    </MainSection>
  );
};

export default HeroComp;
