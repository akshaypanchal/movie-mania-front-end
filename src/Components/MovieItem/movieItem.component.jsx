import './movieItem.style.css';


const MovieItem = ({name, image}) => {

    return (
        <div className="card" >
            <img className="card-img-top" src={image} />
            <p className="card-text">{name}</p>
            <button className="btn btn-info" onClick="{() => sendLoginData()" >More Details </button>
            <button className="btn btn-primary" onClick="{() => sendLoginData()" >Book this Movie </button>
        </div>
    );
}

export default MovieItem;