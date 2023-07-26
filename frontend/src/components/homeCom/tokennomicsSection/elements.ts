import styled from "styled-components";

export const MainSection = styled.section`
  /* overflow: hidden; */

  .container {
    margin-top: 6rem;
    padding-bottom: 6rem;
  }

  .first-div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Title = styled.h5`
  color: #fff;
  text-align: center;
  font-size: 64px;
  font-style: normal;
  font-weight: 400;
  line-height: 27.5px; /* 42.969% */
  padding-bottom: 4rem;
`;

export const MainWrapper = styled.div`
  border-radius: 30px;
  border: 3px solid #a3aab5;
  width: 327px;
  height: 148px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  h5 {
    color: #4bae32;
    text-align: justify;
    font-size: 30px;
    font-style: normal;
    font-weight: 400;
    line-height: 27.5px; /* 91.667% */
    text-transform: uppercase;
    margin-top: 1.5rem;
  }

  p {
    color: #fff;
    text-align: justify;

    font-size: 30px;
    font-style: normal;
    font-weight: 400;
    line-height: 32.873px; /* 109.575% */
  }
`;
