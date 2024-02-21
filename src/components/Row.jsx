import React, { useEffect, useState } from 'react'
import tmdbAxiosInstance from '../tmdbAxiosInstance';
import"./row.css"
function Row({title,fetchUrl,isPoster}) {

  const[allmovies,setAllMovies]=useState();
  const base_url = "https://image.tmdb.org/t/p/original/";

  const fetchData=async()=>{

    const {data}=await tmdbAxiosInstance.get(fetchUrl)
    

    setAllMovies(data.results)
  }
  // console.log(allmovies);

 useEffect(()=>{
  fetchData()
 },[]);



  return (
    <div>
        <h1 style={{marginLeft:"2%"}}>{title}</h1>
        <div className="movies-row">
          {
            allmovies?.map(item=>(
              <img className={`${isPoster && 'movie-poster'} movies`} src={`${base_url}/${isPoster?item.poster_path:item?.backdrop_path}`} alt="" />
            ))
          }
        </div>


    </div>
  )
}

export default Row;