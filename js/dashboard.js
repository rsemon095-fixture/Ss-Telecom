// ==========================
// SS TELECOM Dashboard
// ==========================

// Dashboard Cards
const cards = document.querySelectorAll(".card");

cards.forEach((card, index) => {

    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";

    setTimeout(() => {

        card.style.transition = "0.5s ease";
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";

    }, index * 100);

});

// Card Click Effect
cards.forEach((card) => {

    card.addEventListener("click", () => {

        card.style.transform = "scale(0.96)";

        setTimeout(() => {

            card.style.transform = "";

        }, 150);

    });

});

// Welcome Message
const title = document.querySelector(".welcome-box h1");

if (title) {

    const hour = new Date().getHours();

    if (hour < 12) {

        title.innerHTML = "🌞 Good Morning";

    } else if (hour < 18) {

        title.innerHTML = "☀️ Good Afternoon";

    } else {

        title.innerHTML = "🌙 Good Evening";

    }

}

// Logout Function
window.logout = function () {

    if (confirm("Are you sure you want to logout?")) {

        localStorage.removeItem("user");

        window.location.href = "index.html";

    }

};

console.log("✅ Dashboard Loaded");
