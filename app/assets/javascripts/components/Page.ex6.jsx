class Page extends React.Component {
  constructor() {
    super();
    this.state = {
      movieInfo: "",
      movieData: [],
      info: false
    };

    this.addMovie = this.addMovie.bind(this);
    this.changeDetail = this.changeDetail.bind(this);
    this.addMovieDetail = this.addMovieDetail.bind(this);
  }

  addMovie(movies){
    this.setState({ movieData: movies })
  }

  changeDetail(onOff){
    this.setState({ info: onOff })
  }

  addMovieDetail(content){
    this.setState({ info: true, movieInfo: content })
  }

  render() {
    return(
      <div>
        <Search changeDetail={ this.changeDetail } addMovie={ this.addMovie }/>
          <div className="container">
            <Timeline  changeDetail={ this.changeDetail } movieInfo={ this.state.movieInfo } addMovieDetail={ this.addMovieDetail } info = { this.state.info } movieData={ this.state.movieData } />
          </div>
      </div>
    )
  }
}
