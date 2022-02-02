
import { useState, useEffect, Children } from "react";






export default function Characters() {
  const url = "https://aot-api.herokuapp.com/characters/";

  const [datas, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const dataCharacters = await (await fetch(url)).json();
      setData(dataCharacters);
    }
    getData();
  }, []);

  return (
    <>
      <div className="container">
        {datas.map((chara) => console.log(chara.img))}
        {Children.toArray(
          datas.map((characters) => {
            return (
              <>
                <h1>{characters.id}</h1>
                <p>
                  {characters.name} {characters.surname}
                </p>
                <p>{characters.affiliation}</p>
                <img src={characters.img.pre}></img>
                {characters.img.pos ? (
                  <img src={characters.img.pos}></img>
                ) : null}
              </>
            );
          })
        )}
      </div>
    </>
  );
}
