let usernameInp = document.getElementById("username"),
    passwordInp = document.getElementById("password");

let user = {
    username: "",
    password: ""
},
    userFount = false;

const users = localStorage.getItem("users") ?JSON.parse(localStorage.getItem("users")):[]

function signin() {
    if(usernameInp.value == "" && passwordInp.value == "") alert("Fill the form")
    users.forEach(usr => {
        if (usr.username === usernameInp.value && usr.password === passwordInp.value) { 
            user.username = usr.username
            user.password = usr.password
            localStorage.setItem("user", user.username)
            window.location.href = "./../index.html"
            userFount = true
        }
    })
    if(!userFount) alert("Wrong username or password")
}

function clearForm() {
    document.querySelectorAll("form input").forEach(inp => inp.value = "")
}

function showPass() {
    passwordInp.type = passwordInp.type === "password" ? "text" : "password"
}

document.querySelector("form .btn").addEventListener("click", (e) => {
    e.preventDefault()
    signin()
    clearForm()
})

