import styled from "styled-components";

export const MainSection = styled.section`
  overflow: hidden;
  /* position: relative; */

  .container {
    margin-top: 6rem;
    padding-bottom: 1rem;
  }

  .border-div {
    border-top: 2px solid #fff;
  }
`;

export const ImgWrapper = styled.div`
  /* margin-top: -2rem; */
`;

export const AddressDiv = styled.div`
  /* position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%); */
  h5 {
    color: #fff;
    text-align: center;
    font-family: Readex Pro;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 27.5px; /* 171.875% */
  }

  h4 {
    color: #fff;
    text-align: center;
    font-family: Readex Pro;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 27.5px; /* 171.875% */
    margin-top: -0.8rem;
  }
  p {
    color: #fff;
    text-align: center;
    font-family: Readex Pro;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 27.5px; /* 171.875% */
    margin-top: -0.8rem;
  }
`;
