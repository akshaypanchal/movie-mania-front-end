import MovieDetails from '../movieDetails/movieDetails.component';
import './movieItem.style.css';
import { Modal, Button } from 'react-bootstrap';
import { useState } from 'react';
import {useHistory} from "react-router-dom";
import {useSelector} from 'react-redux';

const MovieItem = ({ name, image, context, director, Stars, imdb  }) => {

    const user =  useSelector(state=>state.user);
    const history = useHistory();
    // const [show, setShow] = useState(false);
    const [modalShow, setModalShow] = useState(false);

    // style={{"width":"18rem"}}


    const bookTheMovie = () => {

        console.log("button cliked!!!");

        if(Object.keys(user).length > 0){
            alert("you are logged in!!");
        }
        else{
            alert("Please login first in order to book the movie!!!");
            history.push("/login");
        }

    }

    return (
        <div>
            <div className="card" >
                <img className="card-img-top" src={image} />
                <p className="card-text">{name}</p>
                <button className="btn btn-info" onClick={() => setModalShow(true)}>More Details </button>
                <button className="btn btn-primary" onClick={() => bookTheMovie()} >Book this Movie </button>
            </div>
            <MovieDetails
                show={modalShow}
                onHide={() => setModalShow(false)}
                bookthismovie={()=>bookTheMovie()}
                name={name}
                image={image}
                context = {context}
                stars = {Stars}
                imdb = {imdb}
                director = {director}
            />

        </div>
    );
}

export default MovieItem;