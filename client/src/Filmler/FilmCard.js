
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory,useParams } from 'react-router-dom';

export default function FilmCard (props) {
  const {movie,}=props;
  console.log("movieeeeeeeeeeee",movie);
  const history=useHistory();
  const handlerClick=()=>{
     history.push(`/filimler/${movie.id}`);
  }


if (!movie) {
  return <div>Film bilgisi yükleniyor...</div>;
}
//const {  stars } = movie;


  return(
    
          <div onClick={handlerClick} className="movie-card">
             <h2>{movie.title}</h2>
             <div className="movie-director">
               Director: <em>{movie.director}</em>
             </div>
             <div className="movie-metascore">
               Metascore: <strong>{movie.metascore}</strong>
             </div>
          
           </div>
         
  )
}


