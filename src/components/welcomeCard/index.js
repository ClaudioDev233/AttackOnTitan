import { Card } from "./styles";
import aotLogo from "../../assets/images/aotLogo.svg";
import { Link } from "react-router-dom";
export default function WelcomeCard() {
  return (
    <>
      <Card>
        <img src={aotLogo}></img>
        <p>AOT API Documentantion</p>
        <p>You can find the api here</p>
        <p>You can find this project repo here</p>
        <p>avaiiovajiovjoias</p>
        <p>avaiiovajiovjoias</p>
        <Link to="/about">
          <button>Start</button>
        </Link>
      </Card>
    </>
  );
}
