var React = require('react');
var Actions = require('../actions');
var ImageStore = require('../stores/image-store');
var Reflux = require('reflux');
var ImagePreview = require('./image-preview')


module.exports = React.createClass({
  mixins: [
    Reflux.listenTo(ImageStore,'onChange')
  ],
  render: function(){
    return <div className="topic">
      {this.renderImages()}
    </div>
  },
  renderImages: function(){
    return this.state.images.slice(0,20).map(function(image){
      return <ImagePreview key={image.id} {...image}/>
    });
  },
  componentWillMount: function(){
    Actions.getImages(this.props.params.id);
  },
  componentWillReceiveProps: function(nextProps){
    Actions.getImages(nextProps.params.id);
  },
  getInitialState: function(){
    return {
      images: []
    }
  },
  onChange: function(event, images){
    this.setState({images: images});
  }
});
