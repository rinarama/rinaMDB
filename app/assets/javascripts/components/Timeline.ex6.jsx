class Timeline extends React.Component {
  constructor(){
    super();
    }

  render () {
    if (this.props.info){
      return(
        <section id="tweets-container">
          <section className="movie-detail">
            <div className="d-container">
              <div>
                <img src={this.props.movieInfo.Poster} alt="poster"/>
              </div>

              <div className="m-content">
                <div className="mp-container">
                <p><span>Title:</span>{this.props.movieInfo.Title}</p>
                <p><span>Release Date:</span>{this.props.movieInfo.Released}</p>
                </div>

                <div className="mp-container">
                  <p><span>Director(s):</span>{this.props.movieInfo.Director}</p>
                  <p><span>Featured Actor(s):</span>{this.props.movieInfo.Actors}</p>
                </div>

                <div className="mp-container">
                  <p><span>Plot Summary:</span>{this.props.movieInfo.Plot}</p>
                </div>
              </div>
            </div>
          </section>
        </section>
      )
    } else {
    return(
      <section id="tweets-container">
        <ul>
          { this.props.movieData.map((movieInfo, i) =>{
              return <Movie changeDetail={ this.props.changeDetail } addMovieDetail={ this.props.addMovieDetail } movie={movieInfo} key={i} />
            })
          }
        </ul>
      </section>
    )
  }
}
}
