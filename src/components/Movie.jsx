export const Movie = (props) => {

    const { Title: title, Year: year, imdbID: id, Type: type, Poster: poster } = props;

    return (

        <div id={id} className="card movie">
            <div className="card-image">
                { poster === "N/A" ? <img src={`https://via.placeholder.com/300x420?text=${title}`} alt="" /> : <img src={poster} alt="" />  }
                   
            </div>
            <div className="card-content">
                <h4 className="card-title">{title}</h4>
                <p>{year} <span class="right">{type}</span></p>
            </div>
        </div>
    )
}