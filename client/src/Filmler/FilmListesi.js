import React from 'react';
import FilmCard from "./FilmCard"
export default function FilmListesi(props) {
   const {filmListesi}=props
  return (
   
    <div className="movie-list">
      {filmListesi.map(movie => (
         
        <FilmCard key={movie.id} movie={movie} />
       
      ))}
    </div>
  );
  }

// function FilmDetayları(props) {
//   const { title, director, metascore } = props.movie;

//   return (
//     <div className="movie-card">
//       <h2>{title}</h2>
//       <div className="movie-director">
//         Director: <em>{director}</em>
//       </div>
//       <div className="movie-metascore">
//         Metascore: <strong>{metascore}</strong>
//       </div>
//     </div>
//   );
// }
