import { H1, H2 } from "./styles";
export default function Sobre() {
  return (
    <>
      <div>
        <H1>Sobre</H1>
        <p>
          Esse projeto, além de servir como uma pequena documentação, oferece
          uma opção de busca dos dados sobre o anime Attack On Titan.
        </p>
        <H2>Quais informações acharei aqui?</H2>
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
      <H2>Acha que falta algo na API?</H2>
      <p>
        Estou aberto a sugestões, tanto sobre conteúdo quanto sobre o jeito que
        a API foi construída, entre em contato comigo pelo GitHub e envie suas
        sugestões.
      </p>
      <H2>Quem criou essa API?</H2>
      <p>Euzinho</p>

      <H2>De onde vieram as informações?</H2>
      <p>
        As informações da API foram retiradas das wikis AOT, sendo elas :
        https://attackontitan.fandom.com/pt-br/wiki/Attack_on_Titan_Wiki ,
        https://attackontitan.fandom.com/wiki/Attack_on_Titan_Wiki
      </p>
      <H2>Qual foi a Stack ultilizada para a construção da API?</H2>
      <p>
        Por ser a minha primeira tentativa de crição de uma API e também por ser
        bem simples utilizei: NodeJs (pois a linguagem que mais "tenho" domínio
        é o JavaScript), a biblioteca Express e o Insomnia para testes. A API
        está hospedada em um servidor utilizando Herokuapp.
      </p>
    </>
  );
}
