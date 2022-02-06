import { NavMenu, Img, MenuDiv } from "./styles";
import aotLogo from "../../assets/images/aotLogo.svg";
export default function Menu() {
  return (
    <>
      <nav>
        <section>
          <img src={aotLogo}></img>
        </section>
        <ul>
          <li>
            <div>
              <p>Merda</p>
            </div>
          </li>
          <li>
            <div>
              <p>Merda</p>
            </div>
          </li>
          <li>
            <div>
              <p>Merda</p>
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
}
