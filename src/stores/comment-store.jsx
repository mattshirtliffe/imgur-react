var Api = require('../utils/api');
var Reflux = require('reflux');
var Actions = require('../actions');
var _ = require('lodash');


module.exports = Reflux.createStore({
  listenables:[Actions],
  getImage: function(id) {
    Api.get('gallery/' + id + '/comments')
      .then(function(json){
          console.log(json.data);
          this.comment = json.data;
          this.triggerChange()
      }.bind(this));
  },
  triggerChange: function(){
    this.trigger('change', this.comment)
  }
});
