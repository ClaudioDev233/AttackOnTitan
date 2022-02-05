import Titans from "../../components/titans";
export default function About() {
  return (
    <>
      <div>
        <h1>Sobre</h1>
        <p>
          Esse projeto, além de servir como uma pequena documentação, oferece
          uma opção de busca dos dados sobre o anime Attack On Titan.
        </p>
        <h2>Quais informações acharei aqui?</h2>
        <p>No momento, as informações disponíveis são:</p>
        <ul>
          <li>Nome dos Personagens</li>
          <li>Afiliação dos Personagens</li>
          <li>Imagem dos Personagens</li>
          <li>Nome dos Titans</li>
          <li>Portadores dos Titans</li>
          <li>Imagem dos Titans</li>
        </ul>
        <p>Veja a documentação aqui para ver como fazer as requisições</p>
        <p>Clique aqui para ver um exemplo de como a API pode ser usada</p>
      </div>
      <Titans></Titans>
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
