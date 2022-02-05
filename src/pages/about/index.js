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
      <h1>Acha que falta algo na API?</h1>
      <p>
        Estou aberto a sugestões, tanto sobre conteúdo quanto sobre o jeito que
        a API foi construída, entre em contato comigo pelo GitHub e envie suas
        sugestões.
      </p>
      <h1>Quem criou essa API?</h1>
      <p>Euzinho</p>

      <h1>De onde vieram as informações?</h1>
      <p>
        As informações da API foram retiradas das wikis AOT, sendo elas :
        https://attackontitan.fandom.com/pt-br/wiki/Attack_on_Titan_Wiki ,
        https://attackontitan.fandom.com/wiki/Attack_on_Titan_Wiki
      </p>
      <h1>Qual foi a Stack ultilizada para a construção da API?</h1>
      <p>
        Por ser a minha primeira tentativa de crição de uma API e também por ser
        bem simples utilizei: NodeJs (pois a linguagem que mais "tenho" dominio
        é o JavaScript), a biblioteca Express e o Insomnia para testes. A API
        está hospedada em um servidor utilizando Herokuapp.
      </p>
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
