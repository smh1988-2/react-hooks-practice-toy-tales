import React, { useEffect } from "react";

function ToyCard({ toy, toys, setToys }) {
  
  function handleDelete(myToy) {
    const newArray = [toys.filter((t) => t.id !== myToy.id)]
    setToys(newArray)
  }

  function updateLikes() {
    toy.likes+=1
    setToys([...toys])
  }

  return (
    <div className="card">
      <h2>{toy.name}</h2>
      <img src={toy.image} alt={toy.name} className="toy-avatar" />
      <p>{toy.likes} Likes </p>
      <button className="like-btn" onClick={updateLikes}>
        Like {"<3"}
      </button>
      <button className="del-btn" onClick={(myToy) => handleDelete(myToy)}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;


  // useEffect(() => {
  // fetch("http://localhost:3001/toys", {
  //   method: "PATCH",
  //   headers: { "Content-type": "application/json" },
  //   body: JSON.stringify({ toy: toy }),
  // })
  //   .then(r => r.json())
  //   .then((data) => console.log(data))
  // }, [])