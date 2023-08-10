let humbugerEl = document.querySelector(".humbuger");
let mobileMenuEl = document.querySelector(".mobilemenu");
let signUpButtonEl = document.querySelector("#signup")
const signUpPagePg = document.querySelector("#signUpPage");
const homePagePg = document.querySelector(".homepage");




function OpenCloseHumbuger(humbuger) {
    humbuger.addEventListener("click", () => {
        humbuger.classList.toggle("is-active")
        openCloseNavbar(humbugerEl,mobileMenuEl)
    })
}

function openCloseNavbar(humbuger, navMenu) {
    if (humbuger.classList.contains("is-active")) {
        navMenu.classList.add("la-active")
    } else {
        navMenu.classList.remove("la-active")
    }    
}
OpenCloseHumbuger(humbugerEl)

// sign up and login page

function signUp(button) {
    button.addEventListener("click", () => {
        signUpPagePg.style.display = "flex"
        homePagePg.style.display="none"
    })
}
signUp(signUpButtonEl)

function error(input) {
        input.classList.add("error")
}
function success(input) {
        input.classList.add("success")
}

function validating(input) {
    if (input.value === "") {
        error(input)
    } else (
        success(input)
    )
}
// form validation
function formValidation() {
    const inputFirstName=document.querySelector("#firstname")
    const inputLastName=document.querySelector("#secondname")
    const inputEmail=document.querySelector("#email")
    const inputPhoneNumber=document.querySelector("#phoneNo")
    const inputPassword=document.querySelector("#password")
    const inputConfirmPassword=document.querySelector("#confirmPassword")
    const inputIdentity=document.querySelector("#idntity")
    
    const signUpBotton = document.querySelector("#formSignUp");
    signUpBotton.addEventListener("click", () => {
        validating(inputFirstName)
        validating(inputLastName)
        validating(inputEmail)
        validating(inputPhoneNumber)
    })
}
formValidation()
