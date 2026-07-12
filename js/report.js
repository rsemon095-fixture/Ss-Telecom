import { rtdb } from "../firebase.js";

import {
  ref,
  onValue
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-database.js";

// Firebase References
const flexiRef = ref(rtdb, "flexiload");
const moneyRef = ref(rtdb, "addMoney");
const dueRef = ref(rtdb, "dueMoney");
const productRef = ref(rtdb, "products");

// HTML Elements
const loadTotal = document.getElementById("loadTotal");
const moneyTotal = document.getElementById("moneyTotal");
const dueTotal = document.getElementById("dueTotal");
const productTotal = document.getElementById("productTotal");

// Flexiload Total
onValue(flexiRef, (snapshot) => {

    let total = 0;

    snapshot.forEach((item) => {
        const data = item.val();
        total += Number(data.amount || 0);
    });

    loadTotal.textContent = "৳ " + total.toLocaleString("en-BD");

});

// Add Money Total
onValue(moneyRef, (snapshot) => {

    let total = 0;

    snapshot.forEach((item) => {
        const data = item.val();
        total += Number(data.amount || 0);
    });

    moneyTotal.textContent = "৳ " + total.toLocaleString("en-BD");

});

// Due Money Total
onValue(dueRef, (snapshot) => {

    let total = 0;

    snapshot.forEach((item) => {
        const data = item.val();
        total += Number(data.amount || 0);
    });

    dueTotal.textContent = "৳ " + total.toLocaleString("en-BD");

});

// Product Count
onValue(productRef, (snapshot) => {

    let total = 0;

    snapshot.forEach(() => {
        total++;
    });

    productTotal.textContent = total;

});
