class Hashtagtimeline extends React.Component {
  constructor(){
    super();
    this.state = {
      hashtags: []
    }
  }
  componentDidMount(){
    $.ajax({
      url: 'hashtags/popular',
      method: 'get'
    }).done(response => {this.setState({
      hashtags: response
      })
    })
  }
  render() {
    return(
    <section id="trends-container">
      <h3>Trends</h3>
      <div className="Hashtagview">
      <ul>
      {
        this.state.hashtags.map((data, i) =>{
            return <Hashtagview hashtags={data} key={i} />
        })
      }
      </ul>
    </div>
  </section>
    )
  }
}
