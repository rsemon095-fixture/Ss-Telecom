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
// ==============================
// Dashboard Summary
// ==============================

// Local Storage থেকে Data Load
let todaySales = Number(localStorage.getItem("todaySales")) || 0;
let todayProfit = Number(localStorage.getItem("todayProfit")) || 0;
let cashBalance = Number(localStorage.getItem("cashBalance")) || 0;
let dueAmount = Number(localStorage.getItem("dueAmount")) || 0;

// Dashboard এ Show
const salesEl = document.getElementById("todaySales");
const profitEl = document.getElementById("todayProfit");
const cashEl = document.getElementById("cashBalance");
const dueEl = document.getElementById("dueAmount");

if (salesEl) salesEl.textContent = "৳ " + todaySales.toLocaleString();
if (profitEl) profitEl.textContent = "৳ " + todayProfit.toLocaleString();
if (cashEl) cashEl.textContent = "৳ " + cashBalance.toLocaleString();
if (dueEl) dueEl.textContent = "৳ " + dueAmount.toLocaleString();

// Summary Update Function
window.updateDashboardSummary = function (
    sales = todaySales,
    profit = todayProfit,
    cash = cashBalance,
    due = dueAmount
) {

    localStorage.setItem("todaySales", sales);
    localStorage.setItem("todayProfit", profit);
    localStorage.setItem("cashBalance", cash);
    localStorage.setItem("dueAmount", due);

    if (salesEl) salesEl.textContent = "৳ " + sales.toLocaleString();
    if (profitEl) profitEl.textContent = "৳ " + profit.toLocaleString();
    if (cashEl) cashEl.textContent = "৳ " + cash.toLocaleString();
    if (dueEl) dueEl.textContent = "৳ " + due.toLocaleString();
};

console.log("✅ Dashboard Summary Loaded");
