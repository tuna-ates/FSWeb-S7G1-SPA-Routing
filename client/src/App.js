import React, { useState, useEffect } from "react";
import axios from "axios";

import KaydedilenlerListesi from "./Filmler/KaydedilenlerListesi";

import FilmListesi from "./Filmler/FilmListesi";
import Film from "./Filmler/RamFilm"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import FilmCard from "./Filmler/FilmCard";

export default function App() {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const FilmleriAl = () => {
      axios
        .get("http://localhost:5001/api/filmler") // Burayı Postman'le çalışın
        .then((response) => {
          // Bu kısmı log statementlarıyla çalışın
          // ve burdan gelen response'u 'movieList' e aktarın
          //console.log("denemeeeeeeeeeeee", response.data);
          setMovieList(response.data);
        })
        .catch((error) => {
          console.error("Sunucu Hatası", error);
        });
    };
    FilmleriAl();
  }, []);

  const KaydedilenlerListesineEkle = (movie) => {
    // Burası esnek. Aynı filmin birden fazla kez "saved" e eklenmesini engelleyin
    if(!saved.includes(movie)){
      setSaved([...saved,movie]);
    }
    
  };

  return (
    <Router>
      <KaydedilenlerListesi
        list={saved}
          
        
      />
      <div>
        <Switch>
          <Route path="/" exact>
            <FilmListesi filmListesi={movieList} />
          </Route>
          <Route path="/filmler/:film_id" exact>
            <FilmCard kaydet={KaydedilenlerListesineEkle} />
          </Route>
        </Switch>

        <div>Bu Div'i kendi Routelarınızla değiştirin</div>
      </div>
    </Router>
  );
}
