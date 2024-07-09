# YouMovie
YouMovie is a web application that allows users to explore and search for movies, similar to IMDB. Users can watch trailers, find their favorite actors and storylines, and add movies to their watchlist after signing in.

### Features
  * Search Movies: Find specific movies by title.
  * Explore Movies: Browse through a collection of movies to discover new ones.
  * Watch Trailers: View trailers for movies.
  * Movie Details: Read about the movie's storyline and actors.
  * Watchlist: Add movies to a personalized watchlist after signing in.

## Technology Stack
- **Frontend**:
  Next.js: A React framework for production.
- **Backend**:
  Firebase: Used for authentication and Firestore for the database.
- **APIs**:
  themoviedb.org: For movie data.

## Installation
1- Clone the repository:

```
git clone https://github.com/Anasoud1/movie-project.git
cd movie-project
```

2- Install dependencies:

```
npm install
```

3-Set up environment variables:

  * Create a .env file in the root of your project.
  * Add your Firebase configuration and API keys:
   ```
  NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
  NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
  NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_firebase_project_id
  NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
  NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
  NEXT_PUBLIC_FIREBASE_APP_ID=your_firebase_app_id
  NEXT_PUBLIC_TMDB_API_KEY=your_tmdb_api_key
  ```

4- Start the development server:

```
npm run dev
```

5- Open your browser and visit http://localhost:3000.

## Usage
 1- Search for a Movie:
 
- Use the search bar to find a specific movie by its title.
  
 2- Explore Movies:

 - Browse the navbar to explore a variety of movies.

 3- Watch Trailers:

 - Click on a movie to watch its trailer.

 4- View Movie Details:

- Click on a movie to read about its storyline and actors.
  
 5- Add to Watchlist:

- Sign in to your account.
- Add movies to your watchlist for future viewing.

## Contributing
1- Fork the repository.

2- Create your feature branch: 
```
git checkout -b feature/YourFeature
```

3- Commit your changes: 
```
git commit -m 'Add some feature'
```
4- Push to the branch: 
```
git push origin feature/YourFeature
```
5- Open a pull request.

## License
This project is licensed under the MIT License.

## Acknowledgements
 * **Next.js**
 * **Firebase**
 * **themoviedb.org**
