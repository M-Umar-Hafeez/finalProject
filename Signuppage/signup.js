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