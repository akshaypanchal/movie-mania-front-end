
const MovieItem = ({name, image}) => {

    return (
        <div>
            <h1>{name}</h1>
            <img src={image} />
        </div>
    );
}

export default MovieItem;