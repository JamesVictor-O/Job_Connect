let humbugerEl = document.querySelector(".humbuger");
let mobileMenuEl = document.querySelector(".mobilemenu");
let signUpBn = document.querySelectorAll(".signup")
const logInBn = document.querySelectorAll(".Login")

// imported modules
import { signUpForm, LoginForm,User} from "./signUp.js";



// const James=new User("james","ochula","victorjames408@gmail.com", "123456","Artist")

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
signUpForm(signUpBn)
LoginForm(logInBn)

