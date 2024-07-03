import Posts from "@/components/posts/posts";

export const metadata = {
  title: "YouMovie - Upcoming",
  description: "Find your movie",
};

const apiKey = process.env.API_KEY;

async function Upcoming() {

  return (
    <div>
      <Posts apiUrl={'https://api.themoviedb.org/3/movie/upcoming' + "?api_key=" + apiKey}/>
    </div>
  )
}

export default Upcoming