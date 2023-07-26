import styled from "styled-components";

export const MainSection = styled.section`
  /* overflow: hidden; */

  .container {
    margin-top: 6rem;
    padding-bottom: 6rem;
  }

  .form-control {
    background-color: transparent;

    &:focus {
      box-shadow: none;
    }
  }

  .form-text {
    color: #fff;
    text-align: justify;

    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 27.5px; /* 114.583% */
    text-transform: uppercase;
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

export const TopTitle = styled.h5`
  color: #4bae32;
  text-align: justify;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 27.5px; /* 114.583% */
  text-transform: uppercase;
`;
