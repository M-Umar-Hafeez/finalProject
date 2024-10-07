function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var storedUsers = localStorage.getItem("users");  
    storedUsers = storedUsers ? JSON.parse(storedUsers) : [];  

    var userFound = storedUsers.find(user => user.username === username && user.password === password);

    if (userFound) {
        alert("Login successful!");
        // window.location.href = "file:///F:/WD-1%20Coding/Final%20Assignment/FinalTermAssignment/homepage/Index.html";
    } else {
        alert("Invalid username or password.");
    }
}