var Tinder = window.Tinder || {};

// AJAX Function
Tinder.ajax = function(url, data, callback) {
  var myRequest = new XMLHttpRequest();
  //search tania bowra
  var url = "https://api.spotify.com/v1/search?q=tania+bowra&type=track"
  myRequest.open("POST", url);
  myRequest.send(data);
  console.log(myRequest)
  myRequest.onload = function(event) {
    var response = JSON.parse(event.target.response);
    callback(response);
  };
};


//This is the js to play the songs upon Buttonclick
var Tinder = window.Tinder || {};

var button = document.querySelector(".btn-play");
console.log(button);


button.addEventListener("click", function (){
	console.log("he");
	var url = "https://api.spotify.com/v1/search?q=tania+bowra&type=track"
	function httpGet(url){
	     var xmlHttp = null;
	     xmlHttp = new XMLHttpRequest();
	     xmlHttp.open( "GET", url, false );
	     xmlHttp.send( null );
	     xmlHttp.onload = function() {
         // var response = JSON.parse(event.target.response);
         console.log(this.responseText);
         };
     }

	//      var track = xmlHttp.track.responseText;
	//      console.log(track);
 // }



});