var Comment = React.createClass({
  propTypes: {
    commenter: React.PropTypes.string,
    body: React.PropTypes.string,
    rank: React.PropTypes.number
  }, 

  render: function() {
    return (
      <div>
        <div> Commenter: {this.props.commenter}</div>
        <div> Body: {this.props.body}</div>
        <div> Rank: {this.props.rank}</div>
      </div>);
  }
});