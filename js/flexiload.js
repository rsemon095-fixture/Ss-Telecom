import { rtdb } from "../firebase.js";

import {
    ref,
    push,
    onValue,
    get,
    set
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-database.js";

const amountInput = document.getElementById("amount");
const saveBtn = document.getElementById("saveBtn");
const totalText = document.getElementById("todayTotal");

const loadRef = ref(rtdb, "flexiload");
// Save Amount
saveBtn.addEventListener("click", async () => {

    const amount = Number(amountInput.value);

    if (!amount || amount <= 0) {
        alert("Amount লিখুন");
        return;
    }

    await push(loadRef, {
        amount: amount,
        time: Date.now()
    });

    // Dashboard Today Sales Update
    const salesRef = ref(rtdb, "dashboard/todaySales");

    const snap = await get(salesRef);

    const oldTotal = Number(snap.val() || 0);

    await set(salesRef, oldTotal + amount);

    amountInput.value = "";

});
// Live Total
onValue(loadRef, (snapshot) => {

    let total = 0;

    snapshot.forEach((item) => {

        const data = item.val();

        total += Number(data.amount || 0);

    });

    totalText.innerHTML = "৳ " + total.toLocaleString();

});

// Dashboard Live Sales

const dashboardSales = document.getElementById("todaySales");

const salesRef = ref(rtdb, "dashboard/todaySales");

onValue(salesRef, (snapshot) => {

    if (dashboardSales) {

        dashboardSales.innerHTML =
            "৳ " + Number(snapshot.val() || 0).toLocaleString();

    }

});
