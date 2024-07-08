import React from 'react'
import Image from 'next/image'
import styles from './player.module.css'
import Link from 'next/link';
import sty from '../../page.module.css'
import AddToMylist from '@/components/button/addToMyList';

export const metadata = {
  title: "YouMovie - Movie info",
  description: "Find your movie",
};

const apiKey = process.env.API_KEY;

async function getData(id){
  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}`)
  if (!res.ok) throw new Error('Failed to fetch data')
    return res.json()
}
async function getCasts(id){
  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/casts?api_key=${apiKey}`)
  if (!res.ok) throw new Error('Failed to fetch data')
    return res.json()
}
async function getGenres(id){
  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`)
  if (!res.ok) throw new Error('Failed to fetch data')
    return res.json()
}
async function getRecommendation(id){
  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${apiKey}`)
  if (!res.ok) throw new Error('Failed to fetch data')
    return res.json()
}

async function Player({params}) {
  const data = await getData(params.id);
  const arr = data.results
  let key = ""

  arr.forEach(result => {
    if (result.type === "Trailer"){
      key = result.key;
    }
  })

  const casts = await getCasts(params.id);
  const listCast = casts.cast.slice(0, 18);

  const movie = await getGenres(params.id);
  const genres = movie.genres;

  const recom = await getRecommendation(params.id)
  const movies = recom.results.slice(0, 4);


  return (
    <div className='player'>
        <iframe className={styles.frame} width='100%%'
          src={'https://www.youtube.com/embed/' + key}
          title='Trailer' allowFullScreen></iframe>

      <div className={styles.row}>
        <div className={styles.leftBox}>
          <h1 className={styles.title}>Top Casts</h1>
          <ul className={styles.actors}>
              {
                listCast.map(person => (
                  <li key={person.id}>
                    <div className={styles.imgContainer}>
                      <Image className={styles.imgProfile}
                      src={person.profile_path? "https://image.tmdb.org/t/p/w500" + person.profile_path: "/img/user.png"}
                      fill={true}
                      alt='movie image'/>
                    </div>
                    <div className={styles.box}>
                      <p className={styles.actorName}>{person.name}</p>
                      <p className={styles.character}>{person.character}</p>
                    </div>
                  </li>
                ))
              }

                  
          </ul>
        </div>
        

        <div className={styles.info}>
          <h1 className={styles.title}>Story</h1>
            
            <div className={styles.overview}>
              {movie.overview}
            </div>
            <ul className={styles.genres}>
              {
                
                genres.map(genre => (
                  <li key={genre.id}>{genre.name}</li>
                ))
              }
              
              
            </ul>
            <AddToMylist id={movie.id} poster_path={movie.poster_path} vote_average={movie.vote_average.toFixed(1)} title={movie.title} overview={movie.overview}/>
        </div>
      </div>
      
      <div className={styles.recomContainer}>
        {movies.length !== 0 && <h1 className={styles.title}>Recommendations</h1>}
        <div className={styles.recommendation}>
          {
          movies.map(movie => (
            <Link href={"/player/" + movie.id} className={sty.post} key={movie.id}>
            
              <div className={sty.imageContainer}>
                <Image
                  className={sty.image}
                  src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
                  fill={true}
                  alt="post image"
                />
                {movie.vote_average !== 0.0 && <div className={sty.review}>{movie.vote_average.toFixed(1)}</div>}
              </div>
              
              <div className={sty.content}>
                <h1 className={sty.title}>{movie.title}</h1>
                
                  {movie.overview && <p  className={sty.text}>{movie.overview}</p>}
              </div>
          
            </Link>
          ))
          }
        </div>
      </div>
     
    </div>
  )
}

export default Player