import "./MovieCard.css"

const MovieCards = (props) => {
    return(
        <div className="single-movie-card">
            <p className="title">{props.title}</p>
            <p className="year"><em>{props.year}</em></p>
            <img src={props.url} alt={props.title} />
        </div>
    )
}

export default MovieCards