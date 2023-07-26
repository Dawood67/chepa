import React from "react";
import { MainSection, MainWrapper, Title } from "./elements";
import { MainCol, MainContainer, MainRow } from "components/common";

const TokennomicsComp = () => {
  const data = [
    {
      name: "Token Supply",
      value: "500,000,000,000,000",
    },
    {
      name: "Token Supply",
      value: "500,000,000,000,000",
    },
    {
      name: "Token Supply",
      value: "500,000,000,000,000",
    },
    {
      name: "Token Supply",
      value: "500,000,000,000,000",
    },
    {
      name: "Token Supply",
      value: "500,000,000,000,000",
    },
    {
      name: "Token Supply",
      value: "500,000,000,000,000",
    },
    {
      name: "Token Supply",
      value: "500,000,000,000,000",
    },
    {
      name: "Token Supply",
      value: "500,000,000,000,000",
    },
  ];

  return (
    <MainSection>
      <MainContainer>
        <Title>TOKENOMICS</Title>

        {data.slice(0, 1).map((item) => (
          <div className="first-div">
            <MainWrapper>
              <h5>{item.name}</h5>
              <p>{item.value}</p>
            </MainWrapper>
          </div>
        ))}

        <MainRow>
          {data.slice(1, 7).map((item) => (
            <MainCol lg={4} className="first-div">
              <MainWrapper>
                <h5>{item.name}</h5>
                <p>{item.value}</p>
              </MainWrapper>
            </MainCol>
          ))}
        </MainRow>
      </MainContainer>
    </MainSection>
  );
};

export default TokennomicsComp;
