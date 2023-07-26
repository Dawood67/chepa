import React from "react";
import { MainSection, Title, TopTitle } from "./elements";
import { MainCol, MainContainer, MainRow } from "components/common";
import { Form } from "react-bootstrap";

const BuyChepaComp = () => {
  return (
    <MainSection>
      <MainContainer>
        <Title>buy chepa</Title>
        <MainRow>
          <MainCol lg={6}>
            <TopTitle>from</TopTitle>
            <div className="d-flex gap-4">
              <Form.Text>ETH</Form.Text>
              <Form.Control type="number" />
            </div>
          </MainCol>
          <MainCol lg={6}></MainCol>
        </MainRow>
      </MainContainer>
    </MainSection>
  );
};

export default BuyChepaComp;
