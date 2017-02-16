class Search extends React.Component {
  constructor(){
    super();
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(e){
    e.preventDefault();

    let query = this.refs.searchInfo.value;
    $.ajax({
      url: "http://www.omdbapi.com/?s=" + query,
      method: "get"
    }).done( res => {
      let arr = res.Search;
      this.props.addMovie(arr);
      this.props.changeDetail(false);
    }.bind(this))

  }
  render(){
    return(
      <header id="t-nav">
        <div className="nav-container">
          <div id="brand">
            <img src="http://applenovinky.cz/wp-content/uploads/2014/03/movie-film-icon-itunes-store.png" />
            <span>rinaMDB</span>
          </div>
          <form id="search-form" onSubmit={ this.handleSubmit }>
            <input ref="searchInfo" id="search" type="text" name="query" placeholder="Search for a movie"/>
            <i className="fa fa-search"></i>
          </form>
        </div>
      </header>
    )
  }
}
