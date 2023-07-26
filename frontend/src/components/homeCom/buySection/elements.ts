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
  padding-bottom: 4rem;
`;

export const MainWrapper = styled.div`
  border-radius: 50px;
  border: 3px solid #a3aab5;
  background: #0d1522;
  padding: 1rem 2rem;
  margin-top: 1.5rem;
`;
export const Text = styled.h5`
  color: #4bae32;
  text-align: justify;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 27.5px; /* 114.583% */ /* 114.583% */

  @media (max-width: 756px) {
    text-align: center;
  }
`;
export const Description = styled.p`
  margin-top: 1rem;
  color: #fff;
  text-align: justify;
  font-family: Readex Pro;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 27.5px; /* 137.5% */ /* 137.5% */
`;
