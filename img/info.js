"use strict";
function updateName(response){
	document.getElementById('demo').innerHTML = "<ul>";
    var myTodos = JSON.parse(response);
    for (let i =0 ; i< myTodos.length; i++) {
    if(myTodos[i].name === true) {
    	document.getElementById('demo').innerHTML += 
    	"<li class='name'>"+ myTodos[i].name + "</li>"
    } else {
    	document.getElementById('demo').innerHTML += 
    	"<li class='name'>"+ myTodos[i].name + "</li>"
    }
}
    document.getElementById('demo').innerHTML += "</ul>";
}
function updateEmail(response){
	document.getElementById('demo').innerHTML = "<ul>";
    var myTodos = JSON.parse(response);
    for (let i =0 ; i< myTodos.length; i++) {
    if(myTodos[i].name === true) {
    	document.getElementById('demo').innerHTML += 
    	"<li class='name'>"+ myTodos[i].name + "</li>"
    } else {
    	document.getElementById('demo').innerHTML += 
    	"<li class='email'>"+ myTodos[i].email + "</li>"
    }
}
    document.getElementById('demo').innerHTML += "</ul>";
}
function updatePhone(response){
	document.getElementById('demo').innerHTML = "<ul>";
    var myTodos = JSON.parse(response);
    for (let i =0 ; i< myTodos.length; i++) {
    if(myTodos[i].name === true) {
    	document.getElementById('demo').innerHTML += 
    	"<li class='name'>"+ myTodos[i].name + "</li>"
    } else {
    	document.getElementById('demo').innerHTML += 
    	"<li class='phone'>"+ myTodos[i].phone + "</li>"
    }
}
    document.getElementById('demo').innerHTML += "</ul>";
}
function ajaxCall(callback) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
  console.log("readyState " + this.readyState);
  console.log("status " + this.status );
   if (this.readyState == 4 && this.status == 200) {
    
     callback(this.responseText)
    }
  };
  xhttp.open("GET", "https://jsonplaceholder.typicode.com/users", true);
  xhttp.send();
  console.log(xhttp.responseText);

  
}

