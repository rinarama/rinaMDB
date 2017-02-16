class Movie extends React.Component{
  render() {
    let movie = this.props.movie
    return(
      <li className="tweet">
        <img className="avatar" src={movie.Poster} alt=""/>
        <div className="tweet-content">
          <p>
            <span className="full-name">{movie.Title}</span>
            <span className="username">{movie.Year}</span>
            <span className="timestamp">{movie.imdbID}</span>
          </p>
          <p>{movie.Type}</p>
        </div>
      </li>
    )
  }
}
