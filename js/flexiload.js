import { rtdb } from "../firebase.js";

import {
    ref,
    push,
    onValue
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-database.js";

const amountInput = document.getElementById("amount");
const saveBtn = document.getElementById("saveBtn");
const totalText = document.getElementById("todayTotal");

const loadRef = ref(rtdb, "flexiload");

// Save Amount
saveBtn.addEventListener("click", () => {

    const amount = Number(amountInput.value);

    if (!amount || amount <= 0) {
        alert("Amount লিখুন");
        return;
    }

    push(loadRef, {
        amount: amount,
        time: Date.now()
    });
// Dashboard Today's Sales Update
const salesRef = ref(rtdb, "dashboard/todaySales");

onValue(salesRef, (snapshot) => {

    const oldTotal = Number(snapshot.val() || 0);

    set(salesRef, oldTotal + amount);

}, { onlyOnce: true });
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
