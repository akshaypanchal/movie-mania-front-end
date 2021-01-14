import MovieDetails from '../movieDetails/movieDetails.component';
import './movieItem.style.css';
import { Modal, Button } from 'react-bootstrap';
import { useState } from 'react';

const MovieItem = ({ name, image, context, director, Stars, imdb  }) => {

    const [show, setShow] = useState(false);
    const handleModal = () => setShow(true);
    const handleClose = () => setShow(false);
    const [modalShow, setModalShow] = useState(false);
    // style={{"width":"18rem"}}


    return (
        <div>
            <div className="card" >
                <img className="card-img-top" src={image} />
                <p className="card-text">{name}</p>
                <button className="btn btn-info" onClick={() => setModalShow(true)}>More Details </button>
                <button className="btn btn-primary" onClick="{() => sendLoginData()" >Book this Movie </button>
            </div>
            <MovieDetails
                show={modalShow}
                onHide={() => setModalShow(false)}
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