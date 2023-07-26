import React from "react";
import { Description, MainSection, MainWrapper, Text, Title } from "./elements";
import { MainContainer } from "components/common";

const BuyComp = () => {
  const data = [
    {
      text: "CREATE A WALLET",
      description: `Download metamask or your wallet of choice from the app store or google play store for free. Desktop users, download the google chrome extension by going to metamask.io.`,
    },
    {
      text: "GET ETH",
      description: `Have ETH in your wallet to switch to $BlackPepe. You can either buy ETH directly from metamask, or another exchange and have it transferred from another wallet.`,
    },
    {
      text: "HEAD TO UNISWAP",
      description: `Go to the uniswap interface. Make sure your metamask or wallet of choice is connected, with the funds available.`,
    },
    {
      text: "SWITCH ETH TO $BLACKPEPE",
      description: `Swap your ETH for $BlackPepe and join our Venture.`,
    },
  ];

  return (
    <MainSection>
      <MainContainer>
        <Title>HOW TO BUY</Title>

        {data.map((item) => (
          <MainWrapper>
            <Text>{item.text}</Text>
            <Description>{item.description}</Description>
          </MainWrapper>
        ))}
      </MainContainer>
    </MainSection>
  );
};

export default BuyComp;
