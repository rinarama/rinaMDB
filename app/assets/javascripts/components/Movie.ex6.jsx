class Movie extends React.Component{
  constructor(){
    super();
    this.handleClick = this.handleClick.bind(this)
    }
    handleClick(event){
      event.preventDefault();
      let mSearch = this.refs.title.innerHTML

      $.ajax({
      url: "http://www.omdbapi.com/?t=" + mSearch,
      method: "GET"
      }).done(response => {
      this.props.addMovieDetail(response);
      }.bind(this))
    }

  render() {
    let movie = this.props.movie
    return(
      <li className="tweet">
        <img className="avatar" src={movie.Poster} alt=""/>
        <div className="tweet-content">
          <p>
          <a href={ "http://www.omdbapi.com/?t=" + movie.Title } onClick={ this.handleClick }>
            <span ref="title" className="full-name">{ movie.Title }</span>
          </a>
            <span className="timestamp">{movie.imdbID}</span>
          </p>
        </div>
      </li>
    )
  }
}
