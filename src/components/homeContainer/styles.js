import background from "../../assets/images/background.jpg";
import backgroundMobile from "../../assets/images/mobileBackground.gif";

import styled from "styled-components";

export const Background = styled.section`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  background-blend-mode: multiply;

  height: 100vh;
  padding: 0;
  margin: 0;
  color: #ffffff;

  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 600px) {
    background-color: lightblue;
    background-image: url(${backgroundMobile});
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    align-items: flex-end;
  }
`;
