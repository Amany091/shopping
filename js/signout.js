let registerBtn = document.getElementById("register"),
    loginBtn = document.getElementById("login"),
    signoutBtn = document.getElementById("signout"),
    userVal = document.getElementsByClassName("user")[0];

if (localStorage.getItem("user")) {
    registerBtn.classList.add("d-none")
    loginBtn.classList.add("d-none")
    signoutBtn.classList.remove("d-none")
}

function signout() {
    localStorage.removeItem("user")
    registerBtn.classList.remove("d-none")
    loginBtn.classList.remove("d-none")
    signoutBtn.classList.add("d-none")
    userVal.innerHTML = ""
    window.location.href='./../signin.html'
}