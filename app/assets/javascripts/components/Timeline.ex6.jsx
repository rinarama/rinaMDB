class Timeline extends React.Component {
  constructor(){
    super();
    }

  render () {
    return(
      <section id="tweets-container">
        <h3>Movie Search Results</h3>
        <ul>
        {
          this.props.movieData.map((movieInfo, i) =>{
            return <Movie movie={tweetInfo} key={i} />
          })
        }

        </ul>
      </section>
    )
  }
}
