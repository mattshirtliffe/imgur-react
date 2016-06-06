var Fetch = require('whatwg-fetch');
var rootUrl = "https://api.imgur.com/3/";
var apiKey = "2c63f020409c1c3";

module.exports =  {
  get: function(url) {
    return fetch(rootUrl + url, {
      headers:{
        'Authorization':'Client-ID ' + apiKey
      }
    })
    .then(function(response){
      return response.json();
    })
  }
};


// API.get('images');
