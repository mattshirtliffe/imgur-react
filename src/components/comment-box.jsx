var React = require('react');

module.exports = React.createClass({
  render: function(){
    var comments = this.props.comment;
    var length = comments.length;
    var comment = comments[0];
    r = ""
    for (i = 0; i < comments.length; i++)
    {
      r += comments[i].comment;
      r += "\n\n";
    }
    // This is fucking stupid!
    return <ul className="list-group">
      {this.renderComments()}
    </ul>
  },
  renderComments: function(){
    return this.props.comment.slice(0,20).map(function(comment){
      return <li className="list-group-item comment-box" key={comment.id}>
        <span className="badge">  {comment.ups} </span>
        <h5> {comment.author} </h5>
        {comment.comment}
      </li>
    })
  }
});
