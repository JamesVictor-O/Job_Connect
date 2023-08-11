const signUpPagePg = document.querySelector("#signUpPage");
const homePagePg = document.querySelector(".homepage");
const inputFirstName=document.querySelector("#firstname")
const inputLastName=document.querySelector("#secondname")
const inputEmail=document.querySelector("#email")
const inputPhoneNumber=document.querySelector("#phoneNo")
const inputPassword=document.querySelector("#password")
const inputConfirmPassword=document.querySelector("#confirmPassword")
const inputIdentity=document.querySelector("#idntity")

let myInformation = {
    
}


// sign up and login page

function signUp(button) {
    button.addEventListener("click", () => {
        signUpPagePg.style.display = "flex"
        homePagePg.style.display="none"
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
    if (input.id == 'firstname') {
        if (input.value.trim().length < 3 || input.value.trim() === "") {
            error(input)
        } else {
            success(input)
        }
    }
    if (input.id == "email") {
        if (!input.value.includes("@gmail.com") || input.value.trim() === "") {
            error(input)
        } else {
            success(input)
        }
    }
    if (input.id == "password") {
        if (input.value.trim().length < 6 || input.value.trim() === "") {
            error(input)
        } else {
            success(input)
        }
    }
    if (input.id == "confirmPassword") {
        if (inputPassword.value !== input.value || input.value.trim() === "") {
            error(input)
        } else {
            success(input)
        }
    }
    
}
// form validation
function formValidation() { 
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
        if (input.classList.contains("error")) {
            allChecked = false;
            break;
        }
    }
    if (allChecked) {
        myInformation.firstName = inputFirstName.value;
        myInformation.secondName = inputLastName.value;
        myInformation.email = inputEmail.value;
        myInformation.phoneNumber = inputPhoneNumber.value;
        myInformation.passWord = inputPassword.value;
        myInformation.identity = inputIdentity.value;
        
        console.log(myInformation)
    } else {
        console.log("not good to go")
    }
    
}


export {signUp,}