import React from 'react'
import Posts from '@/components/posts/posts';

export const metadata = {
  title: "YouMovie - Search",
  description: "Find your movie",
};

const apiKey = process.env.API_KEY;

function SearchPage({params}) {
  const searchText = params.query;
  
  const url = 'https://api.themoviedb.org/3/search/movie?query=' + searchText + "&api_key=" + apiKey

  return (
    <div>
      <Posts apiUrl={url}/>
    </div>
  )
}

export default SearchPage