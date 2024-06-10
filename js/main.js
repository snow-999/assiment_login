// signup inputs
let nameSinUp = document.getElementById('nameUp');
let emailSinUp = document.getElementById('emailUp');
let passSinUp = document.getElementById('passUp');
let singUpBtn = document.getElementById('signUp');
// msgs
let validMsg = document.querySelector('#validMsg');
let invalidMsg = document.querySelector('#invalidMsg');
// login inputs
let emailLognIN = document.getElementById('emailIn');
let passLogIn = document.getElementById('passIn');
let logInBtn = document.getElementById('logInBtn');
// more deta
let newUser = []
const nameRegx = /^[a-zA-z]{3,20}$/;
const emailRegx = /^[a-zA-z]{3,20}([1-9]{3})?\@[a-z]{5,10}\.[a-z]{3,7}$/;
const passRegx = /^[0-9]{3,20}$/;
if (localStorage.getItem("Users")) {
    newUser = JSON.parse(localStorage.getItem("Users"));
}
// function to add new user
function addUser() {
    if (validationSignUp()) {
        let User = {
            id: nameSinUp.value,
            email: emailSinUp.value,
            password: passSinUp.value
        };
        newUser.push(User);
        clearInputs();
        localStorage.setItem("Users", JSON.stringify(newUser));
    }
}

// sign up validation
function validationSignUp() {
    let userName = nameSinUp.value;
    let userEmail = emailSinUp.value;
    let userPass = passSinUp.value;
    if (nameRegx.test(userName) && emailRegx.test(userEmail) && passRegx.test(userPass)) {
        console.log("match")
        if (invalidMsg.classList.contains("d-block")) {
            invalidMsg.classList.replace("d-block", "d-none");
        }
        validMsg.classList.remove("d-none");
        validMsg.classList.add("d-block");
        return true;
    } else {
        console.log("not match");
        invalidMsg.classList.remove("d-none");
        invalidMsg.classList.add("d-block");
    }
}
// log in function
function LogIn() {

}
// logn in validation
function validationLogin() {
    let logEmail = emailLognIN.value;
    let logPass = passLogIn.value;
    for (let i = 0; i < newUser.length; i++) {
        if (logEmail.toLowerCase == newUser[i].email.toLowerCase && logPass == newUser[i].password) {
            console.log("match")
            return true;
        } else {
            console.log("not match");
        }
    }

}
// claer inputs
function clearInputs() {
    nameSinUp.value = "";
    emailSinUp.value = "";
    passSinUp.value = "";
}
console.log(logInBtn);
console.log(singUpBtn);
// events
document.getElementById('signUp').addEventListener('click', addUser);
document.getElementById('logInBtn').addEventListener('click', validationLogin);