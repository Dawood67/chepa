import React from "react";
import {
  Balance,
  BtnWrapper,
  Btns,
  BuyBtn,
  ConnectBtn,
  InfoDiv,
  MainSection,
  MainWrapper,
  RightWrapper,
  SelectDiv,
  Title,
  TopTitle,
} from "./elements";
import { MainCol, MainContainer, MainRow } from "components/common";
import { Form, Image } from "react-bootstrap";
import { Select } from "antd";
import { info } from "assets";
import { BsArrowDown } from "react-icons/bs";

const BuyChepaComp = () => {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  return (
    <MainSection>
      <MainContainer>
        <Title>buy chepa</Title>
        <MainRow style={{ paddingBottom: "2rem" }}>
          <MainCol lg={6}>
            <TopTitle>from</TopTitle>

            <MainWrapper>
              <SelectDiv>
                <Select
                  defaultValue="1"
                  style={{ width: 120 }}
                  onChange={handleChange}
                  options={[
                    { value: "1", label: "Eth" },
                    { value: "2", label: "Chepa" },
                  ]}
                />
                <Form.Control placeholder="0" />
              </SelectDiv>
              <div className="second-div">
                <Balance>
                  <h5> balance: </h5>
                  <span>0.000 ETH</span>
                </Balance>
                <BtnWrapper>
                  <Btns>25%</Btns>
                  <Btns>50%</Btns>
                  <Btns>75%</Btns>
                  <Btns>MAX</Btns>
                </BtnWrapper>
              </div>
            </MainWrapper>
            <div className="icon">
              <BsArrowDown color="#A3AAB5" fontSize={20} cursor="pointer" />
            </div>
            <div className="mt-4">
              <TopTitle>to</TopTitle>

              <MainWrapper>
                <SelectDiv>
                  <Select
                    defaultValue="2"
                    style={{ width: 120 }}
                    onChange={handleChange}
                    options={[
                      { value: "1", label: "Eth" },
                      { value: "2", label: "Chepa" },
                    ]}
                  />
                  <Form.Control placeholder="0" />
                </SelectDiv>
                <div className="second-div" style={{ paddingBottom: "1rem" }}>
                  <Balance>
                    <h5> balance: </h5>
                    <span>0.000 ETH</span>
                  </Balance>
                  {/* <BtnWrapper>
                    <Btns>25%</Btns>
                    <Btns>50%</Btns>
                    <Btns>75%</Btns>
                    <Btns>MAX</Btns>
                  </BtnWrapper> */}
                </div>
              </MainWrapper>
            </div>

            <ConnectBtn>CONECT WALLET</ConnectBtn>
          </MainCol>
          <MainCol lg={1}></MainCol>
          <MainCol lg={5}>
            <RightWrapper>
              <TopTitle>steps</TopTitle>
              <div className="d-flex align-items-center gap-3 mt-4">
                <div className="number">
                  <h5>1</h5>
                </div>
                <div className="text">
                  <p>Click Connect wallet</p>
                </div>
              </div>

              <div className="d-flex align-items-center gap-3 mt-4">
                <div className="number">
                  <h5>2</h5>
                </div>
                <div className="text">
                  <p>Click Buy now</p>
                </div>
              </div>

              <div className="btn-div">
                <TopTitle>no ETH? no problem</TopTitle>
                <h4>
                  Use transbank to buy ETH
                  <br /> directly with your credit card
                  <br /> and join
                </h4>

                <BuyBtn>bUY ETH</BuyBtn>
              </div>

              <InfoDiv>
                <div>
                  <Image src={info} />
                </div>
                <div>
                  <h5>
                    Having issues connecting
                    <br /> your wallet? Please see
                    <br /> our <span>how to buy</span> section?
                  </h5>
                </div>
              </InfoDiv>
            </RightWrapper>
          </MainCol>
        </MainRow>
      </MainContainer>
    </MainSection>
  );
};

export default BuyChepaComp;
