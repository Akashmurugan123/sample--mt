function login() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;
    const error = document.getElementById("error");
  
    if (user === "admin" && pass === "1234") {
      window.location.href = "dashboard.html";
    } else {
      error.textContent = "Invalid credentials!";
      error.style.color = "red";
    }
  }
  