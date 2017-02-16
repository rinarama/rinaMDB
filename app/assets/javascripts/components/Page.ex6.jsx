class Page extends React.Component {
  constructor() {
    super();
    this.state = {
      tweetData: [],
      movieData: []
    };
    this.addTweet = this.addTweet.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  componentDidMount() {
    // $.ajax({
    //   url: 'http://www.omdbapi.com/?t=super'
    // }).done(response => {
    //     let arr = []
    //     arr.push(response)
    //     this.setState({tweetData: arr})
    //   })
  }

  addTweet(tweet){
    this.setState({tweetData: [tweet].concat(this.state.tweetData)})
  }

  addMovie(movies){
    this.setState({ tweetData: movies })
  }

    render() {
      return(
        <div>
          <Searchbar addMovie={ this.addMovie }/>
            <div className="container">
                <Timeline  tweetData={this.state.tweetData}/>
              </div>
          </div>
      )
    }
}
