let humbugerEl = document.querySelector(".humbuger");
let mobileMenuEl = document.querySelector(".mobilemenu");
let signUpBn = document.querySelectorAll(".signup")
const logInBn = document.querySelectorAll(".Login")
const loginBtn=document.querySelector("#formLogin")

// imported modules
import { signUpForm, LoginForm} from "./signUp.js";

// pages
const jobSeekersHomePg=document.querySelector("#seekersDashbord")

class User{
    constructor(firstName,lastName,email,password,identity) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.identity = identity;
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

const James=new User("james","ochula","victorjames408@gmail.com", "123456","Artist")
console.log(James)

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

console.log(loginBtn)
OpenCloseHumbuger(humbugerEl)
signUpForm(signUpBn)
LoginForm(logInBn)

loginBtn.addEventListener("click", () => {
    let email = document.querySelector("#loginEmail").value
    let password = document.querySelector("#loginPassword").value; 
    James.Login(email,password)
})