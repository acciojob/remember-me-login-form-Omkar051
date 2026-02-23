//your JS code here. If required.
const form = document.getElementById("loginForm");

const username = document.getElementById("username");

const password = document.getElementById("password");

const checkbox = document.getElementById("checkbox");

const existingBtn = document.getElementById("existing");



// Check localStorage on page load

window.onload = function () {

    const savedUser = localStorage.getItem("username");

    const savedPass = localStorage.getItem("password");

    if (savedUser && savedPass) {

        existingBtn.style.display = "inline-block";

    }

};



// Submit form

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const user = username.value;

    const pass = password.value;

    alert(`Logged in as ${user}`);

    if (checkbox.checked) {

        localStorage.setItem("username", user);

        localStorage.setItem("password", pass);

        existingBtn.style.display = "inline-block";

    }

    else {

        localStorage.removeItem("username");

        localStorage.removeItem("password");

        existingBtn.style.display = "none";

    }

});




// Existing user login

existingBtn.addEventListener("click", function () {

    const savedUser = localStorage.getItem("username");

    if (savedUser) {

        alert(`Logged in as ${savedUser}`);

    }

});