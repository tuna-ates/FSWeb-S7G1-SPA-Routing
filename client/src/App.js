import React, { useState, useEffect } from "react";
import axios from "axios";

import KaydedilenlerListesi from "./Filmler/KaydedilenlerListesi";

import FilmListesi from "./Filmler/FilmListesi";
import Film from "./Filmler/Film"
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

  const KaydedilenlerListesineEkle = (id) => {
    // Burası esnek. Aynı filmin birden fazla kez "saved" e eklenmesini engelleyin
  };

  return (
    <Router>
      <KaydedilenlerListesi
        list={
          [
            /* Burası esnek */
          ]
        }
      />
      <div>
        <Switch>
          <Route path="/" exact>
            <FilmListesi filmListesi={movieList} />
          </Route>
          <Route path="/filimler/:film_id" exact>
            <Film />
          </Route>
        </Switch>

        <div>Bu Div'i kendi Routelarınızla değiştirin</div>
      </div>
    </Router>
  );
}
