import styled from "styled-components";

export const MainWrapper = styled.div`
  overflow: hidden;
`;

export const Title = styled.h5`
  color: #fff;
  text-align: center;
  margin-top: 4rem;
  font-size: 64px;
  font-style: normal;
  font-weight: 400;
  line-height: 27.5px; /* 42.969% */
`;

export const DataWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 6rem;
  /* padding-bottom: 6rem; */
  border: 2px solid #4bae32;
  border-radius: 15px;
  padding: 1rem 3rem;
  background-color: #0d1522;
  margin-bottom: 2rem;
  h5 {
    color: #fff;
    text-align: center;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 27.5px; /* 137.5% */
  }

  p {
    color: #4bae32;
    font-family: Readex Pro;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 27.5px; /* 196.429% */
    margin-bottom: 0rem;
  }

  .negative-value {
    color: red;
  }

  .positive-value {
    color: green; /* or any other color you prefer for positive values */
  }
`;
