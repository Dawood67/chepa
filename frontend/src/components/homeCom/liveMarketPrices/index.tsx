import React from "react";
import { DataWrapper, MainWrapper, Title } from "./element";
import { MainContainer } from "components/common";

const data = [
  {
    name: "S&P 500",
    value: "-15.62 (-0.34%)",
  },
  {
    name: "S&P 500",
    value: "+267.06 (+0.76%)",
  },
  {
    name: "DOW 30",
    value: "-15.62 (-0.34%)",
  },
  {
    name: "S&P 500",
    value: "-15.62 (-0.34%)",
  },
  {
    name: "S&P 500",
    value: "+267.06 (+0.76%)",
  },
  {
    name: "DOW 30",
    value: "-15.62 (-0.34%)",
  },
  {
    name: "DOW 30",
    value: "-15.62 (-0.34%)",
  },
];

function LiveMarketPrices() {
  const isNegative = (value) => {
    return value.startsWith("-");
  };

  // Create a CSS class for the color based on the value's sign
  const getValueColorClass = (value) => {
    return isNegative(value) ? "negative-value" : "positive-value";
  };
  return (
    <MainWrapper>
      <MainContainer>
        <Title>LIVE MARKET PRICES</Title>
        <DataWrapper>
          {data.map((item) => (
            <div>
              <h5>{item.name}</h5>
              <p className={getValueColorClass(item.value)}>{item.value}</p>
            </div>
          ))}
        </DataWrapper>
      </MainContainer>
    </MainWrapper>
  );
}

export default LiveMarketPrices;
