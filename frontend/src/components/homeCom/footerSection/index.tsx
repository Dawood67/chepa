import React from "react";
import { AddressDiv, ImgWrapper, MainSection } from "./elements";
import { MainCol, MainContainer, MainRow } from "components/common";
import { Image } from "react-bootstrap";
import { logo } from "assets";

const FooterComp = () => {
  return (
    <MainSection>
      {/* <div style={{ position: "relative", overflow: "hidden" }}> */}
      <MainContainer>
        <div className="border-div">
          <MainRow className="mt-4">
            <MainCol lg={4}>
              <ImgWrapper>
                <Image src={logo} />
              </ImgWrapper>
            </MainCol>
            <MainCol lg={4}>
              <AddressDiv>
                <h5>0xA3BEEf69ae5C28080a54C4720e48b38aa674B64f</h5>
                <h4>laCHEPA.net</h4>
                <p>© 2023 by CHEPA All rights reserved</p>
              </AddressDiv>
            </MainCol>
          </MainRow>
        </div>
      </MainContainer>
      {/* </div> */}
    </MainSection>
  );
};

export default FooterComp;
