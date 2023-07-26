import { herobg } from "assets";
import styled from "styled-components";

export const MainSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  .hero-div {
    background-image: url(${herobg});
    background-repeat: no-repeat;
    background-size: 70%;
    min-height: 60vh;
    overflow: hidden;
  }

  .left-div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Title = styled.h5`
  color: #fff;
  font-size: 80px;
  font-style: normal;
  font-weight: 400;
  line-height: 27.5px; /* 34.375% */
  margin-top: 5rem;
`;

export const Text = styled.p`
  color: #fff;
  text-align: justify;
  font-family: "Readex Pro", sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 27.5px; /* 137.5% */
`;

export const BuyBtn = styled.button`
  color: #fff;
  font-size: 22.171px;
  font-style: normal;
  font-weight: 400;
  line-height: 30.484px; /* 137.5% */
  text-transform: capitalize;
  border-radius: 11.085px;
  background: #4bae32;
  width: 143px;
  height: 41.016px;
  border: none;
  margin-top: 1.5rem;
`;

export const ImgWrapper = styled.div`
  text-align: end;
  img {
    /* background-color: red; */
  }
`;
