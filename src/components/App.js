import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const API = "http://localhost:3001/toys";
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch(API)
    .then(r => r.json())
    .then(toys => setToys(toys))
  }, []
  )
  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm setToys={setToys} toys={toys} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Show the Form</button>
      </div>
      <ToyContainer toys={toys} setToys={setToys} />
    </>
  );
}

export default App;
