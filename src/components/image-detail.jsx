var React = require('react');
var Reflux = require('reflux');
var ImageStore = require('../stores/image-store');
var CommentStore = require('../stores/comment-store');
var Actions = require('../actions')
var CommentBox = require('./comment-box');

module.exports = React.createClass({
  mixins: [
    Reflux.listenTo(ImageStore, 'onChange'),
    Reflux.listenTo(CommentStore, 'onChange')
  ],
  getInitialState: function(){
    return {
      image: {},
      comment: []
    }
  },
  componentWillMount: function(){
    Actions.getImage(this.props.params.id);
  },
  render: function(){
    return (<div className="image-detail">
      <div className="panel panel-default">
        <div className="panel panel-heading">
          <h4> {this.state.image.title} </h4>
        </div>
        <div className="panel-body">
          <h4> {this.renderImage()} </h4>
        </div>
        <div className="panel-footer">
          <h5> {this.state.image.description} </h5>
        </div>
      </div>
      <h3> Comments  </h3>
      {this.renderComments()}
    </div>);

  },
  renderComments: function() {
      if(!this.state.comment){
        return null;
      }else{
        return <CommentBox comment={this.state.comment} />
      }


  },
  renderImage: function(){
    if(this.state.image.animated){
      return   <video preload='auto' autoPlay='autoplay' loop='loop' webkit-playsinline>
        <source src={this.state.image.mp4} type='video/mp4'> </source>
        </video>
    }
    else {
      return <img src={this.state.image.link}/>
    }
  },
  onChange: function()
  {
    this.setState({
      image: ImageStore.find(this.props.params.id),
      comment: CommentStore.comment
    });
  }
});
