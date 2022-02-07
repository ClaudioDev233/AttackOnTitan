import Menu from "../../components/menu";
import Titans from "../../components/titans";
import GlobalStyle from "../../components/globalStyle";
import Sobre from "../../components/sobre";
export default function About() {
  return (
    <>
      <Menu></Menu>
      <GlobalStyle>
        <Sobre></Sobre>
        <Titans></Titans>
      </GlobalStyle>
    </>
  );
}

{
  /* <p>No momento existes dois endpoints para requisições: </p>
<p>
  1 - Personagens, uma lista com os nomes, afiliação, e imagens tanto
  pré, quanto pós timeskip. https://aot-api.herokuapp.com/characters
</p>
<p>
  2- Titãs, uma lista com nome, portador e imagem do titã em questão.
  https://aot-api.herokuapp.com/titans
</p> */
}
