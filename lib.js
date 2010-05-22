// $(document).ready(function(){
//   // Your code here
// 
// 	gadgets.util.registerOnLoadHandler(makeDOMRequest);
// 	
// 	alert('puadre');
// 
//   
//   // var p = 'puadre'
//   // $("<p></p>").text(p).appendTo("body");
//   
// });

function main() {
	alert('puadre');
	$("<p></p>").text('puadre').appendTo("body");
	
	$('td').text('p');
  
};

function makeDOMRequest() {    
  var params = {};  
  params[gadgets.io.RequestParameters.CONTENT_TYPE] = gadgets.io.ContentType.DOM;  
  var url = "http://www.3bmeteo.com/meteo/milano";  
  gadgets.io.makeRequest(url, response, params);
};

function response(obj) {
  var dom = obj.data;
  var labels = dom.getElementsByClassName("he5");
  for (var e in labels) {
    var p = document.createElement("p");
    p.innerHTML = e.innerHTML;
  }
};        
