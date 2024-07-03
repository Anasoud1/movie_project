import styles from "./page.module.css";
import SearchHome from "@/components/searchHome/SearchHome";

export const metadata = {
  title: "YouMovie - Home",
  description: "Find your movie",
};


export default function Home() {
  return (
   <section className={styles.container}>
    
    <div className={styles.col}>
      <h1>Welcome.</h1>
      <p>Millions of movies to discover & Sign in to access your Watchlist
      Save movies to keep track of what you want to watch. Explore now.</p>
      <SearchHome/>
    </div>
    
  

   </section>
  );
}
