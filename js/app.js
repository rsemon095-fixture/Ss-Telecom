// ==============================
// SS TELECOM App
// ==============================

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");
    const login = document.querySelector(".login-container");

    if (login) {
        login.style.display = "none";
    }

    setTimeout(() => {

        if (loader) {
            loader.style.opacity = "0";

            setTimeout(() => {
                loader.style.display = "none";

                if (login) {
                    login.style.display = "flex";
                }

            }, 500);
        } else {

            if (login) {
                login.style.display = "flex";
            }

        }

    }, 2500);

});


// ==============================
// Service Worker
// ==============================

if ("serviceWorker" in navigator) {

    window.addEventListener("load", () => {

        navigator.serviceWorker
            .register("./sw.js")
            .then(() => console.log("Service Worker Registered"))
            .catch(err => console.log(err));

    });

}
