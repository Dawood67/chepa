import React from "react";
import { InputDiv, MainSection, SubmitBtn, Title } from "./elements";
import { MainContainer } from "components/common";
import { Input } from "antd";
import { Form } from "react-bootstrap";

const FeedBackComp = () => {
  return (
    <MainSection>
      <MainContainer>
        <Title>leave your feedback</Title>

        <InputDiv>
          <Form.Control type="text" placeholder="Enter Message..." />
        </InputDiv>
        <SubmitBtn>Submit</SubmitBtn>
      </MainContainer>
    </MainSection>
  );
};

export default FeedBackComp;
