function signup() {
    var username = document.getElementById("uname").value;
    var password = document.getElementById("pass").value;

    var storedUsers = localStorage.getItem("users");
    storedUsers = storedUsers ? JSON.parse(storedUsers) : [];

    var user = {
        username: username,
        password: password
    };

    storedUsers.push(user);
    localStorage.setItem("users", JSON.stringify(storedUsers));

    alert("Sign Up successful!");
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
