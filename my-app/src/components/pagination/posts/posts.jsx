"use client";
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import styles from '@/app/(dynamic)/page.module.css'
import Image from 'next/image'
import Pagination from '@/components/pagination/pagination';

function shortOverview(overview){
  const arraySplit = overview.split(" ");

  let newArray = ""
  if (arraySplit.length > 60){
    newArray = arraySplit.slice(0, 60)
      overview = newArray.join(" ") + " ..."
  }
  return overview;
}

function Posts({apiUrl}) {
  const [data, setData] = useState({results: []});
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
      fetch(apiUrl + '&page=' + currentPage)
      .then((res) => res.json())
      .then((data) => {
        setData(data)
      })
  }, [currentPage])
 
  const movies = data.results;

  return (
    <div>
      <div className={styles.container}>
      {
      movies.map(movie => (
        <Link href={"/player/" + movie.id} className={styles.post} key={movie.id}>
        
          <div className={styles.imageContainer}>
            <Image
              className={styles.image}
              src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
              fill={true}
              alt="post image"
            />
            {movie.vote_average !== 0.0 && <div className={styles.review}>{movie.vote_average.toFixed(1)}</div>}
          </div>
          
          <div className={styles.content}>
            <h1 className={styles.title}>{movie.title}</h1>
            
              {movie.overview && <p  className={styles.text}>{shortOverview(movie.overview)}</p>}
   
          </div>
      
        </Link>
      ))
      }
      
      </div>
      <Pagination className={styles.pagination} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
    </div>
    
  )
}

export default Posts