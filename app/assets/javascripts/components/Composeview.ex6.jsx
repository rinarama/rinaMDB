class Composeview extends React.Component {
  constructor(){
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }



  handleSubmit(e){
    e.preventDefault()

    let content = this.refs.content.value
    $.ajax({
      url: '/tweets',
      method: 'post',
      data: { tweet: { content } }
    }).done(response => {
      // debugger
      this.props.addTweet(response.content)
    })

  }
  render(){
    return(
      <section id="tweet-box">
        <p id="tweet-box-title">Compose New Tweet</p>
        <form id="tweet-form" onSubmit={ this.handleSubmit }>
          <textarea  ref='content' id="new-tweet" cols="30" rows="5" maxLength="140" name="tweet"></textarea>
          <input type="submit" value="Tweet"/>
        </form>
      </section>
    )
  }
}
