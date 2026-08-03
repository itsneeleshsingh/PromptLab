let launchAppBtn = document.querySelector("#launchApp");
let startOptBtn = document.querySelector("#startOptBtn");

let landingView = document.querySelector("#landing-view");
let appView = document.querySelector("#app-view");

const viewApp = () => {
    landingView.classList.add("hidden");
    appView.classList.remove("hidden");
}

launchAppBtn.addEventListener("click",viewApp);
startOptBtn.addEventListener("click",viewApp);