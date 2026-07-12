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
cards.forEach(card => {

    card.addEventListener("click", function () {

        this.style.transform = "scale(.96)";

        setTimeout(() => {

            this.style.transform = "";

        }, 150);

    });

});

// Welcome Message
const welcomeTitle = document.querySelector(".welcome-box h1");

if (welcomeTitle) {

    const hour = new Date().getHours();

    if (hour < 12) {

        welcomeTitle.textContent = "🌞 Good Morning - SS TELECOM";

    } else if (hour < 18) {

        welcomeTitle.textContent = "☀️ Good Afternoon - SS TELECOM";

    } else {

        welcomeTitle.textContent = "🌙 Good Evening - SS TELECOM";

    }

}

console.log("✅ Dashboard Loaded");
