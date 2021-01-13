import MovieList from './Components/MovieList/movieList.component';
import Navigation from './Components/Navigation/navigation.component';
import movieData from './data/movieList';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import axios from "axios";
import SignUp from './Components/signup/signUp.component';
import Login from './Components/login/login.component';

function App() {
  return (
    <div className="App">

      <Navigation />

      <Switch>

        <Route exact path="/">
          <MovieList movies={movieData} />
        </Route>

        <Route path="/signup">
          <SignUp />
        </Route>

        <Route path="/login">
          <Login />
        </Route>


      </Switch>
    </div>
  );
}

export default App;
