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
        img.src = "https://s3-alpha-sig.figma.com/img/604e/1b5c/7d3c27a774af4e69a6b43fde874c130d?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ROFbOXQrGEygKeIWT077YAUhtyPJ~HBQFbDf4KAM1tJv6YSeMzJxNxChFBU~49tPVvxNMWruY169MNRJPWBtcHMG1rRxHRJFk5SKccg0-~GHDcW4L959tdJNgXUqYwKRik0JN4h4qcSk6Yqksladu2ns8r4ViJFm2qELOS44bYN-rpE-zN49B6IgYyrvt5rzqeuzwH8Trqoe46vqMsDqCkjfKdP0g7bHdZUKtkOTQnBKHHjyqdTFV3kwnBPAI-PA3EgasW97XuBpeAueFVDd6ghxnrB7n~BU5N-bXQN23dNDxh0EDyokFJc9L3nsiBoMT5gnPcdIE4s3Id-uHkpMOQ__";
    } else {
        document.querySelector(".btn2").classList.add("active");
        img.src = "https://s3-alpha-sig.figma.com/img/a177/c757/e4cf6291368cc1d53989ca3678003ee0?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=j~cMqlg537QuuUWg5IO3eg0e~XPudiNjHyqhWV0Wh6HTCy1H4bMaoBRHJlqexSX00qOFkW7qe2sx9r6xdnR0suNqHmzn-hGN4pJvfbUFNqHYY3IyG-aciMZ13vRCfGq01jEuewuq-W9htGyy6toN0U9J0Oz9TKShvvL122gg3yBcCHjNzxjsEUpPb62XeFEtVv0kr9MtdYQTlKiMXY2pIG4Ek2A1r1sRl9-0-IBwSzHd6ocHiQNO2snWkuWCv7YS8Cnw7d017y03PW-AHvRThCIRxP-tz5VyVpuqbH7bS2rA2riEQdt0d7FMQOwcWXOTpzwpgTiwhlKZvgr06vhDfQ__";
    }
}
document.addEventListener("DOMContentLoaded", function () {
    showForm("signInForm");
});
