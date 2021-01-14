import { Modal, Button } from 'react-bootstrap';
import './movieDetails.style.css';

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
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>

    );

}


export default MovieDetails;