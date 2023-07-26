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

export const SelectDiv = styled.div`
  display: flex;
  border-bottom: 1px solid #a3aab5;
  .ant-select .ant-select-arrow {
    display: none;
  }
  .ant-select:not(.ant-select-customize-input) .ant-select-selector {
    background-color: transparent !important;
    border: none !important;
    height: 3rem !important;
  }

  .ant-select {
    background-color: transparent !important;

    justify-content: center;
    display: flex;
    align-items: center;
  }

  .ant-select-single .ant-select-selector .ant-select-selection-item {
    color: #fff;
    text-align: justify;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 27.5px; /* 114.583% */
    text-transform: uppercase;
    margin-top: 0.5rem;
    margin-left: 0.2rem;
  }

  .ant-select:not(.ant-select-disabled):not(.ant-select-customize-input):not(
      .ant-pagination-size-changer
    ):hover
    .ant-select-selector {
    border: none;
  }

  .ant-select-focused.ant-select:not(.ant-select-disabled):not(
      .ant-select-customize-input
    ):not(.ant-pagination-size-changer)
    .ant-select-selector {
    box-shadow: none;
    border: none;
  }

  .ant-select:not(.ant-select-customize-input) .ant-select-selector {
    background-color: transparent !important;
    border: none;
  }

  .form-control {
    background-color: transparent !important;
    border-top: none;
    border-right: none;
    border-bottom: none;
    border-radius: 0px;
    color: #6d6d6d;
    height: 3rem;
    &:focus {
      box-shadow: none !important;
      outline: none !important;
    }

    &::placeholder {
      color: #6d6d6d;
      text-align: justify;
      font-family: Readex Pro;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 27.5px; /* 114.583% */
    }
  }

  .createCollecton
    .ant-select-single.ant-select-show-arrow
    .ant-select-selection-item,
  .ant-select-single.ant-select-show-arrow .ant-select-selection-placeholder {
    color: #8e92a3;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: capitalize;
    margin-top: 0.4rem;
  }
`;

export const Balance = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  h5 {
    color: #a3aab5;
    text-align: justify;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 27.5px; /* 114.583% */
    text-transform: uppercase;
  }

  span {
    color: #a3aab5;
    text-align: justify;
    font-family: Readex Pro;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 27.5px; /* 137.5% */
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Btns = styled.button`
  color: #fff;
  text-align: justify;
  border-radius: 10px;
  border: 1px solid #4bae32;
  background: #4bae32;
  padding: 5px 10px;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 27.5px; /* 137.5% */
  text-transform: uppercase;
`;

export const MainWrapper = styled.div`
  border-radius: 10px;
  border: 1px solid #a3aab5;
  background: #0d1522;
  margin-top: 1.5rem;
`;

export const ConnectBtn = styled.button`
  color: #fff;
  border-radius: 10px;
  background: #4bae32;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 27.5px; /* 137.5% */
  text-transform: capitalize;
  padding: 0rem 1rem;
  height: 45px;
  border: none;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 4rem;
`;

export const RightWrapper = styled.div`
  .text {
    p {
      color: #fff;
      text-align: justify;
      font-family: Readex Pro;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 27.5px; /* 137.5% */
      margin-bottom: 0rem;
    }
  }

  .number {
    background-color: #4bae32;
    border-radius: 50px;
    width: 36px;
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    h5 {
      color: #fff;
      text-align: justify;
      font-size: 24px;
      font-style: normal;
      font-weight: 400;
      line-height: 27.5px; /* 114.583% */
      text-transform: uppercase;
      margin-top: 0.5rem;
    }
  }

  .btn-div {
    margin-top: 3.5rem;

    h4 {
      color: #fff;
      text-align: justify;
      font-family: Readex Pro;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
`;

export const BuyBtn = styled.button`
  color: #fff;
  border-radius: 10px;
  border: 2px solid #fff;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 27.5px; /* 137.5% */
  text-transform: capitalize;
  width: 129px;
  height: 45px;
  background-color: transparent;
  margin-top: 2rem;
`;

export const InfoDiv = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 5rem;
  /* align-items: center; */
  h5 {
    color: #fff;
    text-align: justify;
    font-family: Readex Pro;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    span {
      color: #4bae32;
      text-align: justify;
      font-family: Readex Pro;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
`;

/* market price styling */

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
