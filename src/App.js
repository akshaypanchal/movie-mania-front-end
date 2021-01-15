import MovieList from './Components/MovieList/movieList.component';
import Navigation from './Components/Navigation/navigation.component';
import movieData from './data/movieList';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import axios from "axios";
import SignUp from './Components/signup/signUp.component';
import Login from './Components/login/login.component';
import UserTabs from './Components/userTabs/userTabs.component';
import {useSelector} from "react-redux";

function App() {

  const user = useSelector(state => state.user);

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

        <Route path="/user">
         {
            Object.keys(user).length > 0 ?
                <UserTabs />
                : 
                <p>Please login first in order to access the application!!!</p>        
         }
        </Route>

      </Switch>
    </div>
  );
}

export default App;
