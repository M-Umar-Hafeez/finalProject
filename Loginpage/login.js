function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var storedUsers = localStorage.getItem("users");  
    storedUsers = storedUsers ? JSON.parse(storedUsers) : [];  

    var userFound = storedUsers.find(user => user.username === username && user.password === password);


    if (userFound) {
        alert("Login successful!");

        window.location.href = "../homepage/Index.html"; 
    } else {
        alert("Invalid username or password.");
    }
}

document.getElementById("openNav").onclick = function () {
    document.getElementById("mySidenav").style.width = "200px";
};

document.getElementById("closeNav").onclick = function () {
    document.getElementById("mySidenav").style.width = "0";
};

window.onclick = function (event) {
    if (event.target !== document.getElementById("openNav") && event.target !== document.getElementById("mySidenav")) {
        document.getElementById("mySidenav").style.width = "0";
    }
};
