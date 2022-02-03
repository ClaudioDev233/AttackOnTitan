import styled from "styled-components";

export const Card = styled.div`
  height: 30%;
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  img {
    height: 30%;
  }

  @media only screen and (max-width: 600px) {
    height: 30%;
    width: 100%;
    display: flex;
  }
`;
