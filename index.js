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
    console.log(button)
    button.addEventListener("click", () => {
        signUpPagePg.style.display = "flex"
        homePagePg.style.display="none"
    })
}
signUp(signUpButtonEl)
