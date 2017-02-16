class Hashtagview extends React.Component {
  render() {
    let hashtags = this.props.hashtags;
    return(
      <li>{hashtags.name}</li>
    )
  }
}
