// JavaScript source code
var logged = "0"
var msgString = ""
var progress = ""
var time = ""
var price = ""
var tag = ""
var searchArt = ""
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
        document.getElementById("login").innerHTML = "catlover99";
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
    if (document.getElementById("username").value == "catlover99" && document.getElementById("password").value == "password") {
        logged = "1"
        localStorage.setItem("logged", logged);
        document.getElementById("login").href = "artist.html";
        document.getElementById("login").innerHTML = "catlover99";
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
            msgString = "<h3>CATLOVER99</h3>" + document.getElementById("msgText").value + "<br \>";
            localStorage.setItem("msgString", msgString);
            document.getElementById("msgs").innerHTML = localStorage.getItem("msgString");
            document.getElementById("msgText").value = "";
        }
        else if (localStorage.getItem("logged") == 2) {
            msgString = "<h3>BUYER </h3>" + document.getElementById("msgText").value + "<br \>";
            localStorage.setItem("msgString", msgString);
            document.getElementById("msgs").innerHTML = localStorage.getItem("msgString");
            document.getElementById("msgText").value = "";
        }
    }
    else {
        if (localStorage.getItem("logged") == 1) {
            msgString = localStorage.getItem("msgString") + "<h3>CATLOVER99</h3>" + document.getElementById("msgText").value + "<br \>";
            localStorage.setItem("msgString", msgString);
            document.getElementById("msgs").innerHTML = localStorage.getItem("msgString");
            document.getElementById("msgText").value = "";
        }
        else if (localStorage.getItem("logged") == 2) {
            msgString = localStorage.getItem("msgString") + "<h3>BUYER</h3>" + document.getElementById("msgText").value + "<br \>";
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

function searchArtwork() {
    searchArt = document.getElementById("artworkSearch").value;
    localStorage.setItem("searchArt", searchArt);
}

function artworkLoad() {
    temp = localStorage.getItem("searchArt");
    if (temp == "animals") {
        document.getElementById("11a").src = "artworks/1.jpg";
        document.getElementById("11b").href = "artist1.html";
        document.getElementById("11b").innerHTML = "Artist1";
        document.getElementById("22a").src = "images/cat1.jpg";
        document.getElementById("22b").href = "artist.html";
        document.getElementById("22b").innerHTML = "catlover99";
        document.getElementById("33").innerHTML = "";
    }
    else if (temp == "anime") {
        document.getElementById("11a").src = "artworks/5.jpg";
        document.getElementById("11b").href = "artist1.html";
        document.getElementById("11b").innerHTML = "Artist1";
        document.getElementById("22a").src = "artworks/6.jpg";
        document.getElementById("22b").href = "artist2.html";
        document.getElementById("22b").innerHTML = "Artist2";
        document.getElementById("33").innerHTML = "";
    }
    else if (temp == "comics") {
        document.getElementById("11a").src = "artworks/3.jpg";
        document.getElementById("11b").href = "artist3.html";
        document.getElementById("11b").innerHTML = "Artist3";
        document.getElementById("22").innerHTML = "";
        document.getElementById("33").innerHTML = "";
    }
    else if (temp == "landscapes") {
        document.getElementById("11a").src = "artworks/2.jpg";
        document.getElementById("11b").href = "artist2.html";
        document.getElementById("11b").innerHTML = "Artist2";
        document.getElementById("22a").src = "images/landscape.jpg";
        document.getElementById("22b").href = "artist.html";
        document.getElementById("22b").innerHTML = "catlover99";
        document.getElementById("33").innerHTML = "";
    }
    else if (temp == "logos") {
        document.getElementById("11a").src = "artworks/4.jpg";
        document.getElementById("11b").href = "artist3.html";
        document.getElementById("11b").innerHTML = "Artist3";
        document.getElementById("22").innerHTML = "";
        document.getElementById("33").innerHTML = "";
    }

    checkLogin();
}

function searchArtist() {
    //tag selection
    temp = document.getElementById("tag");
    temp2 = temp.selectedIndex;
    if (temp2 == 1) {
        tag = "Animals";
        localStorage.setItem("tag", tag);
    }
    else if (temp2 == 2) {
        tag = "Anime";
        localStorage.setItem("tag", tag);
    }
    else if (temp2 == 3) {
        tag = "Comics";
        localStorage.setItem("tag", tag);
    }
    else if (temp2 == 4) {
        tag = "Landscape";
        localStorage.setItem("tag", tag);
    }
    else if (temp2 == 5) {
        tag = "Logos";
        localStorage.setItem("tag", tag);
    }

    else {
        tag = "0";
        localStorage.setItem("tag", tag);
    }

    //price selection
    temp = document.getElementById("price");
    temp2 = temp.selectedIndex;
    if (temp2 == 1) {
        price = "$";
        localStorage.setItem("price", price);
    }
    else if (temp2 == 2) {
        price = "$$";
        localStorage.setItem("price", price);
    }
    else if (temp2 == 3) {
        price = "$$";
        localStorage.setItem("price", price);
    }
    else {
        price = "0";
        localStorage.setItem("price", price);
    }
    
    //time selection
    temp = document.getElementById("time");
    temp2 = temp.selectedIndex;
    if (temp2 == 1) {
        time = "10";
        localStorage.setItem("time", time);
    }
    else if (temp2 == 2) {
        time = "20";
        localStorage.setItem("time", time);
    }
    else if (temp2 == 3) {
        time = "30";
        localStorage.setItem("time", time);
    }
    else {
        time = "0";
        localStorage.setItem("time", time);
    }

}

function artistResLoad() {
    tag = localStorage.getItem("tag");
    price = localStorage.getItem("price");
    time = localStorage.getItem("time");

    if (tag == "Animals") {
        if (price == "$") {
            if (time == "10") {
                document.getElementById("1a").src = "artworks/1.jpg";
                document.getElementById("1b").src = "artworks/5.jpg";
                document.getElementById("1c").href = "artist1.html";
                document.getElementById("1c").innerHTML = "Artist1";
                document.getElementById("1d").innerHTML = "$<br />10 days<br />★★★☆☆";
                document.getElementById("2a").src = "images/cat1.jpg";
                document.getElementById("2b").src = "images/landscape.jpg";
                document.getElementById("2c").href = "artist.html";
                document.getElementById("2c").innerHTML = "catlover99";
                document.getElementById("2d").innerHTML = "$<br />10 days<br />★★★★★";
                document.getElementById("3").innerHTML = "";
                document.getElementById("4").innerHTML = "";
            }
            else if (time == "20") {
                document.getElementById("1").innerHTML = "";
                document.getElementById("2").innerHTML = "";
                document.getElementById("3").innerHTML = "";
                document.getElementById("4").innerHTML = "";
                document.getElementById("5").innerHTML = "<li>No results for your search criteria.</li>";
            }
            else if (time == "30") {
                document.getElementById("1").innerHTML = "";
                document.getElementById("2").innerHTML = "";
                document.getElementById("3").innerHTML = "";
                document.getElementById("4").innerHTML = "";
                document.getElementById("5").innerHTML = "<li>No results for your search criteria.</li>";
            }
            else {
                document.getElementById("1a").src = "artworks/1.jpg";
                document.getElementById("1b").src = "artworks/5.jpg";
                document.getElementById("1c").href = "artist1.html";
                document.getElementById("1c").innerHTML = "Artist1";
                document.getElementById("1d").innerHTML = "$<br />10 days<br />★★★☆☆";
                document.getElementById("2a").src = "images/cat1.jpg";
                document.getElementById("2b").src = "images/landscape.jpg";
                document.getElementById("2c").href = "artist.html";
                document.getElementById("2c").innerHTML = "catlover99";
                document.getElementById("2d").innerHTML = "$<br />10 days<br />★★★★★";
                document.getElementById("3").innerHTML = "";
                document.getElementById("4").innerHTML = "";
            }
        }

        else if (price == "$$") {
            document.getElementById("1").innerHTML = "";
            document.getElementById("2").innerHTML = "";
            document.getElementById("3").innerHTML = "";
            document.getElementById("4").innerHTML = "";
            document.getElementById("5").innerHTML = "<li>No results for your search criteria.</li>";
        }

        else if (price == "$$$") {
            document.getElementById("1").innerHTML = "";
            document.getElementById("2").innerHTML = "";
            document.getElementById("3").innerHTML = "";
            document.getElementById("4").innerHTML = "";
            document.getElementById("5").innerHTML = "<li>No results for your search criteria.</li>";
        }

        else {
            if (time == "10") {
                document.getElementById("1a").src = "artworks/1.jpg";
                document.getElementById("1b").src = "artworks/5.jpg";
                document.getElementById("1c").href = "artist1.html";
                document.getElementById("1c").innerHTML = "Artist1";
                document.getElementById("1d").innerHTML = "$<br />10 days<br />★★★☆☆";
                document.getElementById("2a").src = "images/cat1.jpg";
                document.getElementById("2b").src = "images/landscape.jpg";
                document.getElementById("2c").href = "artist.html";
                document.getElementById("2c").innerHTML = "catlover99";
                document.getElementById("2d").innerHTML = "$<br />10 days<br />★★★★★";
                document.getElementById("3").innerHTML = "";
                document.getElementById("4").innerHTML = "";
            }
            else if (time == "20") {
                document.getElementById("1").innerHTML = "";
                document.getElementById("2").innerHTML = "";
                document.getElementById("3").innerHTML = "";
                document.getElementById("4").innerHTML = "";
                document.getElementById("5").innerHTML = "<li>No results for your search criteria.</li>";
            }
            else if (time == "30") {
                document.getElementById("1").innerHTML = "";
                document.getElementById("2").innerHTML = "";
                document.getElementById("3").innerHTML = "";
                document.getElementById("4").innerHTML = "";
                document.getElementById("5").innerHTML = "<li>No results for your search criteria.</li>";
            }
            else {
                document.getElementById("1a").src = "artworks/1.jpg";
                document.getElementById("1b").src = "artworks/5.jpg";
                document.getElementById("1c").href = "artist1.html";
                document.getElementById("1c").innerHTML = "Artist1";
                document.getElementById("1d").innerHTML = "$<br />10 days<br />★★★☆☆";
                document.getElementById("2a").src = "images/cat1.jpg";
                document.getElementById("2b").src = "images/landscape.jpg";
                document.getElementById("2c").href = "artist.html";
                document.getElementById("2c").innerHTML = "catlover99";
                document.getElementById("2d").innerHTML = "$<br />10 days<br />★★★★★";
                document.getElementById("3").innerHTML = "";
                document.getElementById("4").innerHTML = "";
            }
        }

    }

    else if (tag == "Anime") {
        if (price == "$") {
            if (time == "10") {
                document.getElementById("1a").src = "artworks/1.jpg";
                document.getElementById("1b").src = "artworks/5.jpg";
                document.getElementById("1c").href = "artist1.html";
                document.getElementById("1c").innerHTML = "Artist1";
                document.getElementById("1d").innerHTML = "$<br />10 days<br />★★★☆☆";
                document.getElementById("2").innerHTML = "";
                document.getElementById("3").innerHTML = "";
                document.getElementById("4").innerHTML = "";
            }
            else if (time == "20") {
                document.getElementById("1").innerHTML = "";
                document.getElementById("2").innerHTML = "";
                document.getElementById("3").innerHTML = "";
                document.getElementById("4").innerHTML = "";
                document.getElementById("5").innerHTML = "<li>No results for your search criteria.</li>";
            }
            else if (time == "30") {
                document.getElementById("1").innerHTML = "";
                document.getElementById("2").innerHTML = "";
                document.getElementById("3").innerHTML = "";
                document.getElementById("4").innerHTML = "";
                document.getElementById("5").innerHTML = "<li>No results for your search criteria.</li>";
            }
            else {
                document.getElementById("1a").src = "artworks/1.jpg";
                document.getElementById("1b").src = "artworks/5.jpg";
                document.getElementById("1c").href = "artist1.html";
                document.getElementById("1c").innerHTML = "Artist1";
                document.getElementById("1d").innerHTML = "$<br />10 days<br />★★★☆☆";
                document.getElementById("2").innerHTML = "";
                document.getElementById("3").innerHTML = "";
                document.getElementById("4").innerHTML = "";
            }
        }

        else if (price == "$$") {
            if (time == "10") {
                document.getElementById("1").innerHTML = "";
                document.getElementById("2").innerHTML = "";
                document.getElementById("3").innerHTML = "";
                document.getElementById("4").innerHTML = "";
                document.getElementById("5").innerHTML = "<li>No results for your search criteria.</li>";
            }
            else if (time == "20") {
                document.getElementById("1a").src = "artworks/6.jpg";
                document.getElementById("1b").src = "artworks/2.jpg";
                document.getElementById("1c").href = "artist2.html";
                document.getElementById("1c").innerHTML = "Artist2";
                document.getElementById("1d").innerHTML = "$$<br />20 days<br />★★★★☆";
                document.getElementById("2").innerHTML = "";
                document.getElementById("3").innerHTML = "";
                document.getElementById("4").innerHTML = "";
            }
            else if (time == "30") {
                document.getElementById("1").innerHTML = "";
                document.getElementById("2").innerHTML = "";
                document.getElementById("3").innerHTML = "";
                document.getElementById("4").innerHTML = "";
                document.getElementById("5").innerHTML = "<li>No results for your search criteria.</li>";
            }
            else {
                document.getElementById("1a").src = "artworks/6.jpg";
                document.getElementById("1b").src = "artworks/2.jpg";
                document.getElementById("1c").href = "artist2.html";
                document.getElementById("1c").innerHTML = "Artist2";
                document.getElementById("1d").innerHTML = "$$<br />20 days<br />★★★★☆";
                document.getElementById("2").innerHTML = "";
                document.getElementById("3").innerHTML = "";
                document.getElementById("4").innerHTML = "";
            }
        }

        else if (price == "$$$") {
            document.getElementById("1").innerHTML = "";
            document.getElementById("2").innerHTML = "";
            document.getElementById("3").innerHTML = "";
            document.getElementById("4").innerHTML = "";
            document.getElementById("5").innerHTML = "<li>No results for your search criteria.</li>";
        }

        else {
            if (time == "10") {
                document.getElementById("1a").src = "artworks/1.jpg";
                document.getElementById("1b").src = "artworks/5.jpg";
                document.getElementById("1c").href = "artist1.html";
                document.getElementById("1c").innerHTML = "Artist1";
                document.getElementById("1d").innerHTML = "$<br />10 days<br />★★★☆☆";
                document.getElementById("2").innerHTML = "";
                document.getElementById("3").innerHTML = "";
                document.getElementById("4").innerHTML = "";
            }
            else if (time == "20") {
                document.getElementById("1a").src = "artworks/6.jpg";
                document.getElementById("1b").src = "artworks/2.jpg";
                document.getElementById("1c").href = "artist2.html";
                document.getElementById("1c").innerHTML = "Artist2";
                document.getElementById("1d").innerHTML = "$$<br />20 days<br />★★★★☆";
                document.getElementById("2").innerHTML = "";
                document.getElementById("3").innerHTML = "";
                document.getElementById("4").innerHTML = "";
            }
            else if (time == "30") {
                document.getElementById("1").innerHTML = "";
                document.getElementById("2").innerHTML = "";
                document.getElementById("3").innerHTML = "";
                document.getElementById("4").innerHTML = "";
                document.getElementById("5").innerHTML = "<li>No results for your search criteria.</li>";
            }
            else {
                document.getElementById("1a").src = "artworks/1.jpg";
                document.getElementById("1b").src = "artworks/5.jpg";
                document.getElementById("1c").href = "artist1.html";
                document.getElementById("1c").innerHTML = "Artist1";
                document.getElementById("1d").innerHTML = "$<br />10 days<br />★★★☆☆";
                document.getElementById("2a").src = "artworks/6.jpg";
                document.getElementById("2b").src = "artworks/2.jpg";
                document.getElementById("2c").href = "artist2.html";
                document.getElementById("2c").innerHTML = "Artist2";
                document.getElementById("2d").innerHTML = "$$<br />20 days<br />★★★★☆";
                document.getElementById("2").innerHTML = "";
                document.getElementById("3").innerHTML = "";
                document.getElementById("4").innerHTML = "";
            }
        }
    }

    else if (tag == "Comics") {
        if (price == "$") {
            document.getElementById("1").innerHTML = "";
            document.getElementById("2").innerHTML = "";
            document.getElementById("3").innerHTML = "";
            document.getElementById("4").innerHTML = "";
            document.getElementById("5").innerHTML = "<li>No results for your search criteria.</li>";
        }

        else if (price == "$$") {
            document.getElementById("1").innerHTML = "";
            document.getElementById("2").innerHTML = "";
            document.getElementById("3").innerHTML = "";
            document.getElementById("4").innerHTML = "";
            document.getElementById("5").innerHTML = "<li>No results for your search criteria.</li>";
        }

        else if (price == "$$$") {
            if (time == "10") {
                document.getElementById("1").innerHTML = "";
                document.getElementById("2").innerHTML = "";
                document.getElementById("3").innerHTML = "";
                document.getElementById("4").innerHTML = "";
                document.getElementById("5").innerHTML = "<li>No results for your search criteria.</li>";
            }
            else if (time == "20") {
                document.getElementById("1").innerHTML = "";
                document.getElementById("2").innerHTML = "";
                document.getElementById("3").innerHTML = "";
                document.getElementById("4").innerHTML = "";
                document.getElementById("5").innerHTML = "<li>No results for your search criteria.</li>";
            }
            else if (time == "30") {
                document.getElementById("1a").src = "artworks/4.jpg";
                document.getElementById("1b").src = "artworks/3.jpg";
                document.getElementById("1c").href = "artist3.html";
                document.getElementById("1c").innerHTML = "Artist3";
                document.getElementById("1d").innerHTML = "$$$<br />30 days<br />★★★☆☆";
                document.getElementById("2").innerHTML = "";
                document.getElementById("3").innerHTML = "";
                document.getElementById("4").innerHTML = "";
            }
            else {
                document.getElementById("1a").src = "artworks/4.jpg";
                document.getElementById("1b").src = "artworks/3.jpg";
                document.getElementById("1c").href = "artist3.html";
                document.getElementById("1c").innerHTML = "Artist3";
                document.getElementById("1d").innerHTML = "$$$<br />30 days<br />★★★☆☆";
                document.getElementById("2").innerHTML = "";
                document.getElementById("3").innerHTML = "";
                document.getElementById("4").innerHTML = "";
            }
        }

        else {
            if (time == "10") {
                document.getElementById("1").innerHTML = "";
                document.getElementById("2").innerHTML = "";
                document.getElementById("3").innerHTML = "";
                document.getElementById("4").innerHTML = "";
                document.getElementById("5").innerHTML = "<li>No results for your search criteria.</li>";
            }
            else if (time == "20") {
                document.getElementById("1").innerHTML = "";
                document.getElementById("2").innerHTML = "";
                document.getElementById("3").innerHTML = "";
                document.getElementById("4").innerHTML = "";
                document.getElementById("5").innerHTML = "<li>No results for your search criteria.</li>";
            }
            else if (time == "30") {
                document.getElementById("1a").src = "artworks/4.jpg";
                document.getElementById("1b").src = "artworks/3.jpg";
                document.getElementById("1c").href = "artist3.html";
                document.getElementById("1c").innerHTML = "Artist3";
                document.getElementById("1d").innerHTML = "$$$<br />30 days<br />★★★☆☆";
                document.getElementById("2").innerHTML = "";
                document.getElementById("3").innerHTML = "";
                document.getElementById("4").innerHTML = "";
            }
            else {
                document.getElementById("1a").src = "artworks/4.jpg";
                document.getElementById("1b").src = "artworks/3.jpg";
                document.getElementById("1c").href = "artist3.html";
                document.getElementById("1c").innerHTML = "Artist3";
                document.getElementById("1d").innerHTML = "$$$<br />30 days<br />★★★☆☆";
                document.getElementById("2").innerHTML = "";
                document.getElementById("3").innerHTML = "";
                document.getElementById("4").innerHTML = "";
            }
        }
    }
    else if (tag == "Landscapes") {
        if (price == "$") {
            if (time == "10") {
                document.getElementById("1a").src = "images/cat1.jpg";
                document.getElementById("1b").src = "images/landscape.jpg";
                document.getElementById("1c").href = "artist.html";
                document.getElementById("1c").innerHTML = "catlover99";
                document.getElementById("1d").innerHTML = "$<br />10 days<br />★★★★★";
                document.getElementById("2").innerHTML = "";
                document.getElementById("3").innerHTML = "";
                document.getElementById("4").innerHTML = "";
            }
            else if (time == "20") {
                document.getElementById("1").innerHTML = "";
                document.getElementById("2").innerHTML = "";
                document.getElementById("3").innerHTML = "";
                document.getElementById("4").innerHTML = "";
                document.getElementById("5").innerHTML = "<li>No results for your search criteria.</li>";
            }
            else if (time == "30") {
                document.getElementById("1").innerHTML = "";
                document.getElementById("2").innerHTML = "";
                document.getElementById("3").innerHTML = "";
                document.getElementById("4").innerHTML = "";
                document.getElementById("5").innerHTML = "<li>No results for your search criteria.</li>";
            }
            else {
                document.getElementById("1a").src = "images/cat1.jpg";
                document.getElementById("1b").src = "images/landscape.jpg";
                document.getElementById("1c").href = "artist.html";
                document.getElementById("1c").innerHTML = "catlover99";
                document.getElementById("1d").innerHTML = "$<br />10 days<br />★★★★★";
                document.getElementById("2").innerHTML = "";
                document.getElementById("3").innerHTML = "";
                document.getElementById("4").innerHTML = "";
            }
        }

        else if (price == "$$") {
            if (time == "10") {
                document.getElementById("1").innerHTML = "";
                document.getElementById("2").innerHTML = "";
                document.getElementById("3").innerHTML = "";
                document.getElementById("4").innerHTML = "";
                document.getElementById("5").innerHTML = "<li>No results for your search criteria.</li>";
            }
            else if (time == "20") {
                document.getElementById("1a").src = "artworks/6.jpg";
                document.getElementById("1b").src = "artworks/2.jpg";
                document.getElementById("1c").href = "artist2.html";
                document.getElementById("1c").innerHTML = "Artist2";
                document.getElementById("1d").innerHTML = "$$<br />20 days<br />★★★★☆";
                document.getElementById("2").innerHTML = "";
                document.getElementById("3").innerHTML = "";
                document.getElementById("4").innerHTML = "";
            }
            else if (time == "30") {
                document.getElementById("1").innerHTML = "";
                document.getElementById("2").innerHTML = "";
                document.getElementById("3").innerHTML = "";
                document.getElementById("4").innerHTML = "";
                document.getElementById("5").innerHTML = "<li>No results for your search criteria.</li>";
            }
            else {
                document.getElementById("1a").src = "artworks/6.jpg";
                document.getElementById("1b").src = "artworks/2.jpg";
                document.getElementById("1c").href = "artist2.html";
                document.getElementById("1c").innerHTML = "Artist2";
                document.getElementById("1d").innerHTML = "$$<br />20 days<br />★★★★☆";
                document.getElementById("2").innerHTML = "";
                document.getElementById("3").innerHTML = "";
                document.getElementById("4").innerHTML = "";
            }
        }

        else if (price == "$$$") {
            document.getElementById("1").innerHTML = "";
            document.getElementById("2").innerHTML = "";
            document.getElementById("3").innerHTML = "";
            document.getElementById("4").innerHTML = "";
            document.getElementById("5").innerHTML = "<li>No results for your search criteria.</li>";
        }

        else {
            if (time == "10") {
                document.getElementById("1").innerHTML = "";
                document.getElementById("2").innerHTML = "";
                document.getElementById("3").innerHTML = "";
                document.getElementById("4").innerHTML = "";
                document.getElementById("5").innerHTML = "<li>No results for your search criteria.</li>";
            }
            else if (time == "20") {
                document.getElementById("1a").src = "artworks/6.jpg";
                document.getElementById("1b").src = "artworks/2.jpg";
                document.getElementById("1c").href = "artist2.html";
                document.getElementById("1c").innerHTML = "Artist2";
                document.getElementById("1d").innerHTML = "$$<br />20 days<br />★★★★☆";
                document.getElementById("2").innerHTML = "";
                document.getElementById("3").innerHTML = "";
                document.getElementById("4").innerHTML = "";
            }
            else if (time == "30") {
                document.getElementById("1").innerHTML = "";
                document.getElementById("2").innerHTML = "";
                document.getElementById("3").innerHTML = "";
                document.getElementById("4").innerHTML = "";
                document.getElementById("5").innerHTML = "<li>No results for your search criteria.</li>";
            }
            else {
                document.getElementById("1a").src = "artworks/6.jpg";
                document.getElementById("1b").src = "artworks/2.jpg";
                document.getElementById("1c").href = "artist2.html";
                document.getElementById("1c").innerHTML = "Artist2";
                document.getElementById("1d").innerHTML = "$$<br />20 days<br />★★★★☆";
                document.getElementById("2").innerHTML = "";
                document.getElementById("3").innerHTML = "";
                document.getElementById("4").innerHTML = "";
            }
        }
    }
    else if (tag == "Logos") {
        if (price == "$") {
            document.getElementById("1").innerHTML = "";
            document.getElementById("2").innerHTML = "";
            document.getElementById("3").innerHTML = "";
            document.getElementById("4").innerHTML = "";
            document.getElementById("5").innerHTML = "<li>No results for your search criteria.</li>";
        }

        else if (price == "$$") {
            document.getElementById("1").innerHTML = "";
            document.getElementById("2").innerHTML = "";
            document.getElementById("3").innerHTML = "";
            document.getElementById("4").innerHTML = "";
            document.getElementById("5").innerHTML = "<li>No results for your search criteria.</li>";
        }

        else if (price == "$$$") {
            if (time == "10") {
                document.getElementById("1").innerHTML = "";
                document.getElementById("2").innerHTML = "";
                document.getElementById("3").innerHTML = "";
                document.getElementById("4").innerHTML = "";
                document.getElementById("5").innerHTML = "<li>No results for your search criteria.</li>";
            }
            else if (time == "20") {
                document.getElementById("1").innerHTML = "";
                document.getElementById("2").innerHTML = "";
                document.getElementById("3").innerHTML = "";
                document.getElementById("4").innerHTML = "";
                document.getElementById("5").innerHTML = "<li>No results for your search criteria.</li>";
            }
            else if (time == "30") {
                document.getElementById("1a").src = "artworks/4.jpg";
                document.getElementById("1b").src = "artworks/3.jpg";
                document.getElementById("1c").href = "artist3.html";
                document.getElementById("1c").innerHTML = "Artist3";
                document.getElementById("1d").innerHTML = "$$$<br />30 days<br />★★★☆☆";
                document.getElementById("2").innerHTML = "";
                document.getElementById("3").innerHTML = "";
                document.getElementById("4").innerHTML = "";
            }
            else {
                document.getElementById("1a").src = "artworks/4.jpg";
                document.getElementById("1b").src = "artworks/3.jpg";
                document.getElementById("1c").href = "artist3.html";
                document.getElementById("1c").innerHTML = "Artist3";
                document.getElementById("1d").innerHTML = "$$$<br />30 days<br />★★★☆☆";
                document.getElementById("2").innerHTML = "";
                document.getElementById("3").innerHTML = "";
                document.getElementById("4").innerHTML = "";
            }
        }

        else {
            if (time == "10") {
                document.getElementById("1").innerHTML = "";
                document.getElementById("2").innerHTML = "";
                document.getElementById("3").innerHTML = "";
                document.getElementById("4").innerHTML = "";
                document.getElementById("5").innerHTML = "<li>No results for your search criteria.</li>";
            }
            else if (time == "20") {
                document.getElementById("1").innerHTML = "";
                document.getElementById("2").innerHTML = "";
                document.getElementById("3").innerHTML = "";
                document.getElementById("4").innerHTML = "";
                document.getElementById("5").innerHTML = "<li>No results for your search criteria.</li>";
            }
            else if (time == "30") {
                document.getElementById("1a").src = "artworks/4.jpg";
                document.getElementById("1b").src = "artworks/3.jpg";
                document.getElementById("1c").href = "artist3.html";
                document.getElementById("1c").innerHTML = "Artist3";
                document.getElementById("1d").innerHTML = "$$$<br />30 days<br />★★★☆☆";
                document.getElementById("2").innerHTML = "";
                document.getElementById("3").innerHTML = "";
                document.getElementById("4").innerHTML = "";
            }
            else {
                document.getElementById("1a").src = "artworks/4.jpg";
                document.getElementById("1b").src = "artworks/3.jpg";
                document.getElementById("1c").href = "artist3.html";
                document.getElementById("1c").innerHTML = "Artist3";
                document.getElementById("1d").innerHTML = "$$$<br />30 days<br />★★★☆☆";
                document.getElementById("2").innerHTML = "";
                document.getElementById("3").innerHTML = "";
                document.getElementById("4").innerHTML = "";
            }
        }
    }

    else {
        if (price == "$") {
            if (time == "10") {
                document.getElementById("1a").src = "artworks/1.jpg";
                document.getElementById("1b").src = "artworks/5.jpg";
                document.getElementById("1c").href = "artist1.html";
                document.getElementById("1c").innerHTML = "Artist1";
                document.getElementById("1d").innerHTML = "$<br />10 days<br />★★★☆☆";
                document.getElementById("2a").src = "images/cat1.jpg";
                document.getElementById("2b").src = "images/landscape.jpg";
                document.getElementById("2c").href = "artist.html";
                document.getElementById("2c").innerHTML = "catlover99";
                document.getElementById("2d").innerHTML = "$<br />10 days<br />★★★★★";
                document.getElementById("3").innerHTML = "";
                document.getElementById("4").innerHTML = "";
            }
            else if (time == "20") {
                document.getElementById("1").innerHTML = "";
                document.getElementById("2").innerHTML = "";
                document.getElementById("3").innerHTML = "";
                document.getElementById("4").innerHTML = "";
                document.getElementById("5").innerHTML = "<li>No results for your search criteria.</li>";
            }
            else if (time == "30") {
                document.getElementById("1").innerHTML = "";
                document.getElementById("2").innerHTML = "";
                document.getElementById("3").innerHTML = "";
                document.getElementById("4").innerHTML = "";
                document.getElementById("5").innerHTML = "<li>No results for your search criteria.</li>";
            }
            else {
                document.getElementById("1a").src = "artworks/1.jpg";
                document.getElementById("1b").src = "artworks/5.jpg";
                document.getElementById("1c").href = "artist1.html";
                document.getElementById("1c").innerHTML = "Artist1";
                document.getElementById("1d").innerHTML = "$<br />10 days<br />★★★☆☆";
                document.getElementById("2a").src = "images/cat1.jpg";
                document.getElementById("2b").src = "images/landscape.jpg";
                document.getElementById("2c").href = "artist.html";
                document.getElementById("2c").innerHTML = "catlover99";
                document.getElementById("2d").innerHTML = "$<br />10 days<br />★★★★★";
                document.getElementById("3").innerHTML = "";
                document.getElementById("4").innerHTML = "";
            }
        }

        else if (price == "$$") {
            if (time == "10") {
                document.getElementById("1").innerHTML = "";
                document.getElementById("2").innerHTML = "";
                document.getElementById("3").innerHTML = "";
                document.getElementById("4").innerHTML = "";
                document.getElementById("5").innerHTML = "<li>No results for your search criteria.</li>";
            }
            else if (time == "20") {
                document.getElementById("1a").src = "artworks/6.jpg";
                document.getElementById("1b").src = "artworks/2.jpg";
                document.getElementById("1c").href = "artist2.html";
                document.getElementById("1c").innerHTML = "Artist2";
                document.getElementById("1d").innerHTML = "$$<br />20 days<br />★★★★☆";
                document.getElementById("2").innerHTML = "";
                document.getElementById("3").innerHTML = "";
                document.getElementById("4").innerHTML = "";
            }
            else if (time == "30") {
                document.getElementById("1").innerHTML = "";
                document.getElementById("2").innerHTML = "";
                document.getElementById("3").innerHTML = "";
                document.getElementById("4").innerHTML = "";
                document.getElementById("5").innerHTML = "<li>No results for your search criteria.</li>";
            }
            else {
                document.getElementById("1a").src = "artworks/6.jpg";
                document.getElementById("1b").src = "artworks/2.jpg";
                document.getElementById("1c").href = "artist2.html";
                document.getElementById("1c").innerHTML = "Artist2";
                document.getElementById("1d").innerHTML = "$$<br />20 days<br />★★★★☆";
                document.getElementById("2").innerHTML = "";
                document.getElementById("3").innerHTML = "";
                document.getElementById("4").innerHTML = "";
            }
        }

        else if (price == "$$$") {
            if (time == "10") {
                document.getElementById("1").innerHTML = "";
                document.getElementById("2").innerHTML = "";
                document.getElementById("3").innerHTML = "";
                document.getElementById("4").innerHTML = "";
                document.getElementById("5").innerHTML = "<li>No results for your search criteria.</li>";
            }
            else if (time == "20") {
                document.getElementById("1").innerHTML = "";
                document.getElementById("2").innerHTML = "";
                document.getElementById("3").innerHTML = "";
                document.getElementById("4").innerHTML = "";
                document.getElementById("5").innerHTML = "<li>No results for your search criteria.</li>";
            }
            else if (time == "30") {
                document.getElementById("1a").src = "artworks/4.jpg";
                document.getElementById("1b").src = "artworks/3.jpg";
                document.getElementById("1c").href = "artist3.html";
                document.getElementById("1c").innerHTML = "Artist3";
                document.getElementById("1d").innerHTML = "$$$<br />30 days<br />★★★☆☆";
                document.getElementById("2").innerHTML = "";
                document.getElementById("3").innerHTML = "";
                document.getElementById("4").innerHTML = "";
            }
            else {
                document.getElementById("1a").src = "artworks/4.jpg";
                document.getElementById("1b").src = "artworks/3.jpg";
                document.getElementById("1c").href = "artist3.html";
                document.getElementById("1c").innerHTML = "Artist3";
                document.getElementById("1d").innerHTML = "$$$<br />30 days<br />★★★☆☆";
                document.getElementById("2").innerHTML = "";
                document.getElementById("3").innerHTML = "";
                document.getElementById("4").innerHTML = "";
            }
        }

        else {
            if (time == "10") {
                document.getElementById("1a").src = "artworks/1.jpg";
                document.getElementById("1b").src = "artworks/5.jpg";
                document.getElementById("1c").href = "artist1.html";
                document.getElementById("1c").innerHTML = "Artist1";
                document.getElementById("1d").innerHTML = "$<br />10 days<br />★★★☆☆";
                document.getElementById("2a").src = "images/cat1.jpg";
                document.getElementById("2b").src = "images/landscape.jpg";
                document.getElementById("2c").href = "artist.html";
                document.getElementById("2c").innerHTML = "catlover99";
                document.getElementById("2d").innerHTML = "$<br />10 days<br />★★★★★";
                document.getElementById("3").innerHTML = "";
                document.getElementById("4").innerHTML = "";
            }
            else if (time == "20") {
                document.getElementById("1a").src = "artworks/6.jpg";
                document.getElementById("1b").src = "artworks/2.jpg";
                document.getElementById("1c").href = "artist2.html";
                document.getElementById("1c").innerHTML = "Artist2";
                document.getElementById("1d").innerHTML = "$$<br />20 days<br />★★★★☆";
                document.getElementById("2").innerHTML = "";
                document.getElementById("3").innerHTML = "";
                document.getElementById("4").innerHTML = "";
            }
            else if (time == "30") {
                document.getElementById("1a").src = "artworks/4.jpg";
                document.getElementById("1b").src = "artworks/3.jpg";
                document.getElementById("1c").href = "artist3.html";
                document.getElementById("1c").innerHTML = "Artist3";
                document.getElementById("1d").innerHTML = "$$$<br />30 days<br />★★★☆☆";
                document.getElementById("2").innerHTML = "";
                document.getElementById("3").innerHTML = "";
                document.getElementById("4").innerHTML = "";
            }
            else {
                document.getElementById("1a").src = "artworks/1.jpg";
                document.getElementById("1b").src = "artworks/5.jpg";
                document.getElementById("1c").href = "artist1.html";
                document.getElementById("1c").innerHTML = "Artist1";
                document.getElementById("1d").innerHTML = "$<br />10 days<br />★★★☆☆";
                document.getElementById("2a").src = "artworks/6.jpg";
                document.getElementById("2b").src = "artworks/2.jpg";
                document.getElementById("2c").href = "artist2.html";
                document.getElementById("2c").innerHTML = "Artist2";
                document.getElementById("2d").innerHTML = "$$<br />20 days<br />★★★★☆";
                document.getElementById("3a").src = "artworks/4.jpg";
                document.getElementById("3b").src = "artworks/3.jpg";
                document.getElementById("3c").href = "artist3.html";
                document.getElementById("3c").innerHTML = "Artist3";
                document.getElementById("3d").innerHTML = "$$$<br />30 days<br />★★★☆☆";
                document.getElementById("4a").src = "images/cat1.jpg";
                document.getElementById("4b").src = "images/landscape.jpg";
                document.getElementById("4c").href = "artist.html";
                document.getElementById("4c").innerHTML = "catlover99";
                document.getElementById("4d").innerHTML = "$<br />10 days<br />★★★★★";
            }
        }
    }
    
    checkLogin();
}
