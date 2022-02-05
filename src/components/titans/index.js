import { useState, useEffect, Children } from "react";
import axios from "axios";
export default function Titans() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://aot-api.herokuapp.com/titans")
      .then((resp) => setData(resp.data));
  }, []);
  return (
    <>
      <div>
        {Children.toArray(
          data.map((titans) => {
            return (
              <>
                <p>{titans.name}</p>
                <p>{titans.holder}</p>
                <img src={titans.img}></img>
              </>
            );
          })
        )}
      </div>
    </>
  );
}
