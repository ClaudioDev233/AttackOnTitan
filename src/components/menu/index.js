import { NavMenu, Logo, MenuSection, Button } from "./styles";
import aotLogo from "../../assets/images/aotLogo.svg";
export default function Menu() {
  return (
    <>
      <NavMenu>
        <Logo>
          <img src={aotLogo}></img>
        </Logo>
        <MenuSection>
          <ul>
            <li>
              <Button>
                <p>Sobre</p>
              </Button>
            </li>
            <li>
              <Button>
                <p>Docs</p>
              </Button>
            </li>
            <li>
              <Button>
                <p>Exemplos</p>
              </Button>
            </li>
          </ul>
        </MenuSection>
      </NavMenu>
    </>
  );
}
