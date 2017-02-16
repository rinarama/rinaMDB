class Page extends React.Component {
  constructor() {
    super();
    this.state = {
      movieData: []
    };
    this.addMovie = this.addMovie.bind(this);
  }

  componentDidMount() {
  }

  addMovie(movies){
    this.setState({ movieData: movies })
  }

    render() {
      return(
        <div>
          <Search addMovie={ this.addMovie }/>
            <div className="container">
                <Timeline  movieData={this.state.movieData}/>
              </div>
          </div>
      )
    }
}
