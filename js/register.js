
const usernameInp = document.getElementById("username"),
    emailCont = document.getElementsByClassName("email")[0],
    passwordCont = document.getElementsByClassName("password")[0],
    subBtn = document.getElementsByClassName("btn")[0],
    passwordInp = document.getElementById("password"),
    confirmPassInp = document.getElementById("confirmpass"),
    emailInp = document.getElementById("email"),
    confirmpass = document.getElementsByClassName("confirmpass")[0];

let users = []


function saveToLocalStorage() {
    localStorage.setItem("users", JSON.stringify(users));
}

if (localStorage.getItem("users") !== null) {
    users = JSON.parse(localStorage.getItem("users"))
    console.log(users)
}

function addUser() {
    let user = {
        username: usernameInp.value,
        password: passwordInp.value,
        email: emailInp.value
    }
    
    if (passwordInp.value !== confirmPassInp.value) {
        document.getElementsByClassName("incorrect-pass")[0].classList.replace("d-none", "d-block")
        console.log("not match")
    } else {
        document.getElementsByClassName("incorrect-pass")[0].classList.replace("d-block", "d-none")
        console.log("matched")
    }

    if (usernameInp.value == "" && passwordInp.value == "" && confirmPassInp.value == "" & emailInp.value == "") {
        alert("Please fill all the fields")
    }

    let userExist = users.some(currUsr => currUsr.email === user.email)
    if (userExist) { 
        alert("Email already exist")
    }

    if (validatePassword(passwordInp.value) && validateEmail(emailInp.value)) {
        users.push(user)
        saveToLocalStorage()
        console.log(users)
        alert("User added successfully")
    }
}

function validatePassword(password) {
    let passRegx =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    if (!passRegx.test(password)) {
        document.getElementsByClassName("invalid-pass")[0].classList.replace("d-none", "d-block")
        console.log("wrong pass")
        return false
    } else {
        document.getElementsByClassName("invalid-pass")[0].classList.replace("d-block", "d-none")
        console.log("correct pass")
        return true
    }
}

function validateEmail(email) {  
    let emailRegx = /^[A-Z][a-z]+[0-9]{1,3}@(gmail|yahoo).(com|net)$/gi
    if (!emailRegx.test(email)) {
        document.getElementsByClassName("invalid-email")[0].classList.replace("d-none", "d-block")
        console.log("wrong email")
        return false
    } else {
        document.getElementsByClassName("invalid-email")[0].classList.replace("d-block", "d-none")
        console.log("correct email")
        return true
    }
}

function clearForm() {
    document.querySelectorAll("form input").forEach(inp => inp.value = "")
}

function showPass() {
    passwordInp.type = passwordInp.type === "password" ? "text" : "password"
    confirmPassInp.type = confirmPassInp.type === "password" ? "text" : "password"
}

document.querySelector("form").addEventListener("submit", (e)=> e.preventDefault())

subBtn.addEventListener("click", () => {
    addUser()
    clearForm()
    console.log("submitted")
})