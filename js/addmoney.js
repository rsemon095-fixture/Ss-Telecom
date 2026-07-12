import { rtdb } from "../firebase.js";

import {
    ref,
    push,
    onValue
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-database.js";

const moneyRef = ref(rtdb, "addMoney");

const amountInput = document.getElementById("amount");
const saveBtn = document.getElementById("saveMoney");
const totalBalance = document.getElementById("totalBalance");

// Save Money
saveBtn.addEventListener("click", () => {

    const amount = Number(amountInput.value);

    if (amount <= 0 || isNaN(amount)) {
        alert("সঠিক Amount লিখুন");
        return;
    }

    push(moneyRef, {
        amount: amount,
        date: new Date().toLocaleDateString(),
        time: Date.now()
    });

    amountInput.value = "";

    alert("✅ Money Added Successfully");

});

// Live Total Balance
onValue(moneyRef, (snapshot) => {

    let total = 0;

    snapshot.forEach((item) => {

        const data = item.val();

        total += Number(data.amount || 0);

    });

    totalBalance.textContent = "৳ " + total.toLocaleString("en-BD");

});
