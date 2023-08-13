const signUpPagePg = document.querySelector("#signUpPage");
const homePagePg = document.querySelector(".homepage");
const logInPg = document.querySelector("#loginPage");

// sign up and login page

function signUpForm(button) {
    let arrayOfLogin = Array.from(button)
    arrayOfLogin.map(buttons => {
        buttons.addEventListener("click", () => {
            signUpPagePg.style.display="flex"
            logInPg.style.display = "none"
            homePagePg.style.display="none"
        })
    })
}
// signUp(signUpButtonEl)

function error(input) {
    if (input.classList.contains("success")) {
        input.classList.remove("success")
        input.classList.add("error")
    } else {
        input.classList.add("error")
    }
        
        
}
function success(input) {
    if (input.classList.contains("error")) {
        input.classList.remove("error")
        input.classList.add("success")
    } else {
        input.classList.add("success")
    }
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
        validating(inputConfirmPassword)
        validating(inputPassword)
        validating(inputPhoneNumber)
        
        confirmation()
    })
}
formValidation()

function confirmation() {
    const allInputs = document.querySelectorAll(".inputField input");

    let inputs = Array.from(allInputs);
    let allChecked = true
    for (let input of inputs) {
        if (!input.classList.contains("error")) {
            allChecked = false;
            break;
        }
    }
    if (allChecked) {
        console.log("good to go")
    } else {
        console.log("not good to go")
    }
    
}
function formNavigation(button) {
    button.addEventListener("click", () => { 
        logInPg.style.display = "flex"
        homePagePg.style.display = "none"
        signUpPagePg.style.display="none"
    })
}
function LoginForm(button) {
    let arrayOfLogin = Array.from(button)
    arrayOfLogin.map(buttons => {
       formNavigation(buttons)
    })
}


export {signUpForm,LoginForm}