// ==============================
// SS TELECOM
// Loading Controller
// ==============================

const loader = document.querySelector(".loader");
const home = document.querySelector(".home");

// 3 সেকেন্ড পরে Home Screen দেখাবে
window.addEventListener("load", () => {

    setTimeout(() => {

        loader.classList.add("hide");

        setTimeout(() => {

            loader.style.display = "none";

            home.classList.add("show");

        }, 800);

    }, 3000);

});


// Service Worker Register
if ("serviceWorker" in navigator) {

    window.addEventListener("load", () => {

        navigator.serviceWorker.register("sw.js")
        .then(() => {

            console.log("Service Worker Registered");

        })
        .catch((err) => {

            console.log("Service Worker Error :", err);

        });

    });

}


// Disable Right Click
document.addEventListener("contextmenu", function(e){

    e.preventDefault();

});


// Disable Ctrl + U
document.addEventListener("keydown", function(e){

    if(e.ctrlKey && e.key.toLowerCase() === "u"){

        e.preventDefault();

    }

});


// Disable F12
document.addEventListener("keydown", function(e){

    if(e.key === "F12"){

        e.preventDefault();

    }

});
