//import request from "modules/request";

// Create a "close" button and append it to each list item
var participants = document.getElementsByTagName("LI");
var i;
for (i = 0; i < participants.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    participants[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

/*
// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);
*/

// Create a new list item when clicking on the "Add" button
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}

username = "RedLamp3";
apikey = "5q3BnUgRfZZiRHVwufh40ysKU4xys1u3hYoM8AGT";

function createTournament() {
    url = 'https://api.challonge.com/v1/tournaments.json';
    //console.log(url);
    httpPostAsync(url, getResponse);
}

function getResponse(responseText) {
    console.log(responseText.tournament.url);
}

function httpPostAsync(url, callback) {
    
    let data = {"tournament": { "name": "BC1920", "tournament_type": "swiss", "game_name": "Calculus" }};
    var params = JSON.stringify(data);
    var xhr = new XMLHttpRequest();
    
    xhr.open("GET", url, true, username, apikey);

    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log("ready");
            callback(JSON.parse(xhr.responseText));
        }
    };
    
}
