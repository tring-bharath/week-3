var users = [];
function signUp() {
    var newname = document.getElementById("new-name").value.trim();
    var newemail = document.getElementById("new-email").value.trim();
    var newpassword = document.getElementById("new-password").value.trim();
    var newnumber = document.getElementById("number").value.trim();
    let error = document.getElementById("signUpError");
    let signupErr = document.getElementById("signupErr");
    let passErr = document.getElementById("passErr");
    error.textContent = "";
    signupErr.textContent ="";
    passErr.textContent = "";
    if (newname == "") {
        signupErr.textContent = "Fill the required feilds";
        return;
    }
    if (!validateEmail(newemail)) {
        error.textContent = "Invalid email format. Please enter a valid email.";
        return;
    }

    if (newpassword.length < 8) {
        passErr.textContent = "Password must be greater than 8 letters";
        return;
    }
    users.push({ name: newname, email: newemail, password: newpassword, number: newnumber });
    console.log(users);
    showForm("signInForm");
}
function validateEmail(email) {
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}
function signIn() {
    var name = document.getElementById("name").value.trim();
    var password = document.getElementById("password").value.trim();
    var userFound = users.find(user => user.name === name && user.password === password);
    let errorMsg = document.getElementById("signInError");
    errorMsg.textContent = "";
    if (userFound) {
        window.location.href = "home.html";
    } else {
        errorMsg.textContent = "Incorrect username or password!";
    }
}

function showForm(formId) {
    document.getElementById("signInForm").style.display = "none";
    document.getElementById("signUpForm").style.display = "none";

    document.getElementById(formId).style.display = "block";
    document.querySelector(".btn1").classList.remove("active");
    document.querySelector(".btn2").classList.remove("active");
    var img = document.getElementById("image");
    if (formId === "signInForm") {
        document.querySelector(".btn1").classList.add("active");
        img.src = "./signin.png";
    } else {
        document.querySelector(".btn2").classList.add("active");
        img.src = "./signup.png";
    }
}
document.addEventListener("DOMContentLoaded", function () {
    showForm("signInForm");
});
