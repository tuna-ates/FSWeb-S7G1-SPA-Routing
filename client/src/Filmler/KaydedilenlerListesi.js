import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function KaydedilenlerListesi(props) {
  const history=useHistory();
  const changeClick=()=>{
     history.goBack();
  }
  return (
    <div className="saved-list">
      <h3>Kaydedilen Filmler:</h3>
      {props.list.map((movie) => (
        <span className="saved-movie">{movie.title}</span>
      ))}
      <button onClick={changeClick} className="home-button">Anasayfa</button>
    </div>
  );
}
