import Posts from '@/components/posts/posts';
import React from 'react'

export const metadata = {
  title: "YouMovie - Top Rated",
  description: "Find your movie",
};

const apiKey = process.env.API_KEY;

function topRated() {

  return (
    <div>
      <Posts apiUrl={'https://api.themoviedb.org/3/movie/top_rated' + "?api_key=" + apiKey}/>
    </div>
  )
}

export default topRated