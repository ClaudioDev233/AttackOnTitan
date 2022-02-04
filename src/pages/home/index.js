import HomeContainer from "../../components/homeContainer";
import Characters from "../../components/characters";
import WelcomeCard from "../../components/welcomeCard";
import Menu from "../../components/menu";
export default function Home() {
  return (
    <>
      {/* <Menu></Menu> */}

      <HomeContainer>
        <WelcomeCard></WelcomeCard>
      </HomeContainer>
      <Characters></Characters>
    </>
  );
}
