import React from "react";
import { useState } from "react/cjs/react.development";

function ToyForm({ setToys, toys }) {
  
  const [newToyName, setNewToyName] = useState("");
  const [newToyImage, setNewToyImage] = useState("");

  function createNewToyObjectFromState(e) {
    e.preventDefault();

    const newToyObject = {
      id: Math.random(),
      name: newToyName,
      image: newToyImage,
    }
    setToys([...toys, newToyObject])
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={(e) => createNewToyObjectFromState(e)}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange={e => setNewToyName(e.target.value)}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          onChange={e => setNewToyImage(e.target.value)}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
