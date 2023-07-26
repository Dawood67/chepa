import styled from "styled-components";

export const MainSection = styled.section`
  /* overflow: hidden; */

  .container {
    margin-top: 6rem;
    padding-bottom: 6rem;
  }
`;

export const Title = styled.h5`
  color: #fff;
  text-align: center;
  font-size: 64px;
  font-style: normal;
  font-weight: 400;
  line-height: 27.5px; /* 42.969% */
  padding-bottom: 2rem;
`;

export const InputDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .form-control {
    background-color: transparent;
    border-radius: 10px;
    border: 1px solid #a3aab5;
    background: #0d1522;
    height: 57px;
    width: 922px;
    &::placeholder {
      color: #6d6d6d;
      text-align: justify;
      font-family: Readex Pro;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 27.5px; /* 114.583% */
    }

    &:focus {
      box-shadow: none;
    }
  }
`;

export const SubmitBtn = styled.button`
  color: #fff;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 27.5px; /* 137.5% */
  text-transform: uppercase;
  border-radius: 10px;
  border: 2px solid #fff;
  width: 135px;
  height: 45px;
  background-color: transparent;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 4rem;
`;
