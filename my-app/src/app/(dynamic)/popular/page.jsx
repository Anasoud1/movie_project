import Posts from "@/components/posts/posts";

export const metadata = {
  title: "YouMovie - Popular",
  description: "Find your movie",
};

const apiKey = process.env.API_KEY;

function Popular() {
  return (
    <div>
      <Posts apiUrl={'https://api.themoviedb.org/3/movie/popular' + "?api_key=" + apiKey}/>
    </div>
    
  )
}

export default Popular