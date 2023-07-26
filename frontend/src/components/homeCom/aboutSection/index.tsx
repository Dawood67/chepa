import React from "react";
import { BuyBtn, ImgWrapper, MainSection, Text, Title } from "./elements";
import { MainCol, MainContainer, MainRow } from "components/common";
import { Image } from "react-bootstrap";
import { aboutimg } from "assets";

const AboutComp = () => {
  return (
    <MainSection>
      <MainContainer>
        <MainRow>
          <MainCol lg={6}>
            <ImgWrapper>
              <Image src={aboutimg} />
            </ImgWrapper>
          </MainCol>
          <MainCol lg={6}>
            <Title>ABOUT</Title>
            <Text>
              Introducing the enigmatic $chepa, who has unleashed their dark
              side, transitioning from the most memable meme to our worst
              nightmare.
              <br /> After experiencing the real world, Chepa underwent a
              profound metamorphosis, donning air forces that altered not only
              their appearance but also their entire demeanor. Now, $chepa's
              ultimate goal is to confront adversity and work towards restoring
              the world to its former state, as it used to be.
            </Text>
            <BuyBtn>bUY NOW</BuyBtn>
          </MainCol>
        </MainRow>
      </MainContainer>
    </MainSection>
  );
};

export default AboutComp;
