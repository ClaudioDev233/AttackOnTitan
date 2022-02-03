import HomeContainer from "../../components/homeContainer";
import Characters from "../../components/characters";
import WelcomeCard from "../../components/welcomeCard";
export default function Home() {
  return (
    <>
      {/*  <div>Home</div>

      <p>Imagem de algo ou o logo</p>

      <p>Esse projeto serve como documentação para essa api aqui</p>
      <p>Botão entrar </p> */}

      <HomeContainer>
        <WelcomeCard></WelcomeCard>
      </HomeContainer>
    </>
  );
}
