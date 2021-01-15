import { Modal, Button } from 'react-bootstrap';
import './movieDetails.style.css';
import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom'

const MovieDetails = (props) => {


    return (

        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.name}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img className="img" src={props.image}></img>
                <p>
                    {props.context}
                </p>
                <p><strong>Director: </strong>{props.director}</p>
                <p><strong>Starcast: </strong> {props.stars}</p>
                <p><strong>IMDB Rating: </strong> {props.imdb}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.bookthismovie}>Book this Movie</Button>
                <Button variant="danger" onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>

    );

}


export default MovieDetails;