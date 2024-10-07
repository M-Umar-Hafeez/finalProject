function login() {
    // Retrieve form values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Retrieve users stored in localStorage (simulating a database)
    var storedUsers = localStorage.getItem("users");  
    storedUsers = storedUsers ? JSON.parse(storedUsers) : [];  

    // Find user in the stored users array
    var userFound = storedUsers.find(user => user.username === username && user.password === password);


    if (userFound) {
        // If user is found, show success message
        alert("Login successful!");
        
        // Redirect to the Index.html page after clicking "OK"
        window.location.href = "../homepage/Index.html";  // Adjust the path if necessary
    } else {
        // Show error message if credentials don't match
        alert("Invalid username or password.");
    }
}