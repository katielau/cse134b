// JavaScript source code
var logged = "0"
var msgString = ""
var progress = ""
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function checkLogin() {
    if (localStorage.getItem("logged") == 1) {
        document.getElementById("login").innerHTML = "Artist1";
        document.getElementById("login").href = "artist.html";
        document.getElementById("logout").innerHTML = "Logout";
        document.getElementById("msgTab").innerHTML = "Messages";
    }
    else if (localStorage.getItem("logged") == 2) {
        document.getElementById("login").innerHTML = "Buyer";
        document.getElementById("login").href = "";
        document.getElementById("logout").innerHTML = "Logout";
        document.getElementById("msgTab").innerHTML = "Messages";
    }
    else {
        document.getElementById("logout").innerHTML = "";

    }
}

function messagingLoad() {
    document.getElementById("msgs").innerHTML = localStorage.getItem("msgString");
    checkLogin();
    
}

function loggedIn() {
    if (document.getElementById("username").value == "artist1" && document.getElementById("password").value == "password") {
        logged = "1"
        localStorage.setItem("logged", logged);
        document.getElementById("login").href = "artist.html";
        document.getElementById("login").innerHTML = "Artist1";
        window.location.href = "home.html";
    }
    else if (document.getElementById("username").value == "buyer" && document.getElementById("password").value == "password") {
        logged = "2"
        localStorage.setItem("logged", logged);
        document.getElementById("login").href = "";
        document.getElementById("login").innerHTML = "Buyer";
        window.location.href = "home.html";
    }
}

function logout() {
    logged = "0"
    localStorage.setItem("logged", logged);
    document.getElementById("login").href = "login.html";
    document.getElementById("login").innerHTML = "Login";
    window.location.href = "home.html";
}

function msg() {
    if (localStorage.getItem("msgString") == null) {
        if (localStorage.getItem("logged") == 1) {
            msgString = "ARTIST1 <br \>" + document.getElementById("msgText").value + "<br \>";
            localStorage.setItem("msgString", msgString);
            document.getElementById("msgs").innerHTML = localStorage.getItem("msgString");
            document.getElementById("msgText").value = "";
        }
        else if (localStorage.getItem("logged") == 2) {
            msgString = "BUYER <br \>" + document.getElementById("msgText").value + "<br \>";
            localStorage.setItem("msgString", msgString);
            document.getElementById("msgs").innerHTML = localStorage.getItem("msgString");
            document.getElementById("msgText").value = "";
        }
    }
    else {
        if (localStorage.getItem("logged") == 1) {
            msgString = localStorage.getItem("msgString") + "ARTIST1 <br \>" + document.getElementById("msgText").value + "<br \>";
            localStorage.setItem("msgString", msgString);
            document.getElementById("msgs").innerHTML = localStorage.getItem("msgString");
            document.getElementById("msgText").value = "";
        }
        else if (localStorage.getItem("logged") == 2) {
            msgString = localStorage.getItem("msgString") + "BUYER <br \>" + document.getElementById("msgText").value + "<br \>";
            localStorage.setItem("msgString", msgString);
            document.getElementById("msgs").innerHTML = localStorage.getItem("msgString");
            document.getElementById("msgText").value = "";
        }
    }
}

function done(num) {
    temp = document.getElementById(num).innerHTML;
    document.getElementById(num).innerHTML = "<strike>" + temp + "<strike \>";
    document.getElementById(num + "b").innerHTML = "Done!";
    progress = num;
    localStorage.setItem("progress", progress);
}

function money() {
    document.getElementById("sentMoney").innerHTML = "Sent " + document.getElementById("money").value;
    document.getElementById("money").value = ""; 
}