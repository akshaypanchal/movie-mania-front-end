import './movieItem.style.css';


const MovieItem = ({name, image}) => {

    return (
        <div className="card" style={{width:"18rem"}}>
            <img className="card-img-top" src={image} />
            <p className="card-text">{name}</p>
        </div>
    );
}

export default MovieItem;