import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Button } from '@mui/material';

export default function MovieList({movies, handleFavorite}) {
  return (
    <div className='movie-list'>
        {
            movies && movies.map((movie, index) => {
                return <div>
                   <img src={movie.Poster} alt={`movieImg`}/> 
                   <Button onClick={() => handleFavorite(movie)}>
                      <FavoriteIcon />                       
                   </Button>
              </div>
              
            })
        }
    </div> 
  )
}
