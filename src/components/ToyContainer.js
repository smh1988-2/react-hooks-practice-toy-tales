import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, setToys }) {

  return (
    
    toys.map(toy => {
      return (
        <div id="toy-collection">
          {<ToyCard toy={toy} toys={toys} setToys={setToys}/>}
        </div>
      )
    })
  );
}

export default ToyContainer;
