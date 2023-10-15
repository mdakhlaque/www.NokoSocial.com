
document.querySelector("#left-btn").addEventListener("click", show);

function show() {

    document.querySelector(".left-section").classList.toggle("show");

}

document.querySelector("#left-btn").addEventListener("click", rotate);

function rotate() {
    document.querySelector(".logo i").classList.toggle("p");
}


document.querySelector("#right-btn").addEventListener("click", rightShow);

function rightShow() {

    let rightShow = document.querySelector("#right-menu");

    rightShow.classList.toggle("right-show");
}


// --------------Log in section-------------

document.querySelector("#sign-show").addEventListener("click", login);

function login() {
    document.querySelector(".sign").classList.add("sign-box");
}

document.querySelector("#sign-hide").addEventListener("click", hide);

function hide() {
    document.querySelector(".sign").classList.remove("sign-box");
}

// ---------------log in section end-------------