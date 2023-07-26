import React from "react";
import { MainSection, SocialWrappper, Title } from "./elements";
import { MainContainer } from "components/common";
import { Image } from "react-bootstrap";
import { facebookimg, telegramimg, twitterimg, youtubeimg } from "assets";

const JoinComp = () => {
  return (
    <MainSection>
      <MainContainer>
        <Title>JOIN our Community!</Title>

        <SocialWrappper>
          <Image src={twitterimg} />
          <Image src={telegramimg} />
          <Image src={youtubeimg} />
          <Image src={facebookimg} />
        </SocialWrappper>
      </MainContainer>
    </MainSection>
  );
};

export default JoinComp;
