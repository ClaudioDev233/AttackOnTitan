import styled from "styled-components";

export const NavMenu = styled.nav`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: #6f553f;
  height: 60px;
  justify-content: space-between;
  color: #ffeccf;
`;

export const Logo = styled.section`
  padding: 50px;
  img {
    height: 200px;
    width: 200px;
  }
`;

export const MenuSection = styled.section`
  padding: 50px;
  ul {
    display: flex;
    gap: 20px;

    li {
      &:hover {
        background-color: #ffeccf;
        color: #403535;
      }
    }
  }
`;
export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90px;
  height: 50px;
`;
