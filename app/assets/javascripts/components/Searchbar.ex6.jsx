class Searchbar extends React.Component {
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
    }.bind(this))

  }
  render(){
    return(
      <header id="t-nav">
        <div className="nav-container">
          <div id="brand">
            <img id="flop-logo" src="https://s-media-cache-ak0.pinimg.com/originals/a1/b3/5c/a1b35cd6f364aa1fd520528852311063.jpg" />
            <img src="https://s-media-cache-ak0.pinimg.com/originals/a1/b3/5c/a1b35cd6f364aa1fd520528852311063.jpg" />
            <span>FindFlix</span>
          </div>
          <form id="search-form" onSubmit={ this.handleSubmit }>
            <input ref="searchInfo" id="search" type="text" name="query"/>
            <i className="fa fa-search"></i>
          </form>
        </div>
      </header>
    )
  }
}
