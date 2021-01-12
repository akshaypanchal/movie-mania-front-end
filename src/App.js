import MovieList from './Components/MovieList/movieList.component';
import Navigation from './Components/Navigation/navigation.component';
import movieData from './data/movieList';
import './App.css';
import axios from "axios";

// const options = {
//   method: 'GET',
//   url: 'https://movie-database-imdb-alternative.p.rapidapi.com/',
//   params: {s: '2018', page: '1', r: 'json'},
//   headers: {
//     'x-rapidapi-key': 'bc672e1d75msh8d1d6b258eaa990p101570jsn50767165a40f',
//     'x-rapidapi-host': 'movie-database-imdb-alternative.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });

function App() {
  return (
    <div className="App">
      <Navigation />
      <MovieList movies = {movieData} />
    </div>
  );
}

export default App;
