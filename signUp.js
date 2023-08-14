const signUpPagePg = document.querySelector("#signUpPage");
const homePagePg = document.querySelector(".homepage");
const logInPg = document.querySelector("#loginPage");
const inputFirstName=document.querySelector("#firstname")
const inputLastName=document.querySelector("#secondname")
const inputEmail=document.querySelector("#email")
const inputPhoneNumber=document.querySelector("#phoneNo")
const inputPassword=document.querySelector("#password")
const inputConfirmPassword=document.querySelector("#confirmPassword")
const inputIdentity = document.querySelector("#idntity")
const loginBtn=document.querySelector("#formLogin")
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

    introduction() {
        console.log(`my name is ${this.firstName} ${this.lastName}`)
    }
}
const allUsers =JSON.parse(localStorage.getItem("dataBase")) || [];
console.log(allUsers)



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

// adding new users to database

const addUser = function (firstName, lastName, email, passWord, identity, phoneNumber) {
    allUsers.map(elements => {
        if (elements.email === email) {
            console.log("you already have an account with us")
        } else {
            allUsers.push(firstName= new User(firstName,
                lastName,
                email,
                passWord,
                identity,
                phoneNumber))
            localStorage.setItem("dataBase", JSON.stringify(allUsers))
        }
    })
    console.log(allUsers)
}


// form validation
function formValidation() { 
    const signUpBotton = document.querySelector("#formSignUp");
    signUpBotton.addEventListener("click", (e) => {
        e.preventDefault();

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
        addUser(firstName, secondName, email, passWord, identity, phoneNumber)
        
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

loginBtn.addEventListener("click", () => {
    let email = document.querySelector("#loginEmail").value
    let password = document.querySelector("#loginPassword").value;
    allUsers.map(elements => {
        if (elements.email === email) {
            elements.introduction()
        } 
    }) 
    // James.Login(email,password)
})

export {signUpForm,LoginForm}
