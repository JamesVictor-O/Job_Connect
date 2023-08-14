const signUpPagePg = document.querySelector("#signUpPage");
const homePagePg = document.querySelector(".homepage");
const logInPg = document.querySelector("#loginPage");
const inputFirstName=document.querySelector("#firstname")
const inputLastName=document.querySelector("#secondname")
const inputEmail=document.querySelector("#email")
const inputPhoneNumber=document.querySelector("#phoneNo")
const inputPassword=document.querySelector("#password")
const inputConfirmPassword=document.querySelector("#confirmPassword")
const inputIdentity=document.querySelector("#idntity")
// imported functions


export class User{
    constructor(firstName,lastName,email,password,identity,phoneNumber) {
        this.firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.identity = identity;
        this.phoneNumber = phoneNumber;
    }
    Login(email,password) {
        if (email === this.email && password === this.password) {
            jobSeekersHomePg.style.display = "flex"
            document.querySelector("#loginPage").style.display = "none"
            let allArray = Array.from(logInBn)

            allArray.map(elements => {
                elements.innerHTML="Log out"
            })
            let allArray2 = Array.from(signUpBn)
            allArray2.map(elements => {
                elements.style.display="none"
            })
            console.log(this)
        } else (
            document.querySelector(".errorLoginMessage").innerHTML="Invalid login informations!!"
        )
    }
}
 
const allUsers=[]
let dataStorage=localStorage.setItem("dataBase", JSON.stringify(allUsers));
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
        let firstName = inputFirstName.value;
        let secondName = inputLastName.value;
        let email = inputEmail.value;
        let phoneNumber = inputPhoneNumber.value;
        let passWord = inputPassword.value;
        let identity = inputIdentity.value; 

        let dataBase = JSON.parse(localStorage.getItem("dataBase"))

        if (dataBase.length == 0) {
            allUsers.push(new User(firstName, secondName, email, passWord,
            ))
            localStorage.setItem("dataBase", JSON.stringify(allUsers));
            dataBase = JSON.parse(localStorage.getItem("dataBase"))
        } else if(dataBase.length >= 0) {
            console.log("okay")
            // dataBase.map(elements => {
            //     console.log(elements)
            // })
        }
        console.log(dataBase)
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




// login

console.log(JSON.parse(localStorage.getItem("dataBase")))

export {signUpForm,LoginForm}
