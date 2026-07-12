import { rtdb } from "../firebase.js";

import {
    ref,
    push,
    onValue
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-database.js";

const dueRef = ref(rtdb, "dueMoney");

const customerName = document.getElementById("customerName");
const customerPhone = document.getElementById("customerPhone");
const dueAmount = document.getElementById("dueAmount");

const saveDue = document.getElementById("saveDue");
const dueTable = document.getElementById("dueTable");

// Save Due
saveDue.addEventListener("click", () => {

    const name = customerName.value.trim();
    const phone = customerPhone.value.trim();
    const amount = Number(dueAmount.value);

    if (!name || !phone || amount <= 0) {
        alert("সব তথ্য সঠিকভাবে পূরণ করুন");
        return;
    }

    push(dueRef, {
        name,
        phone,
        amount,
        status: "Due",
        createdAt: Date.now()
    });

    customerName.value = "";
    customerPhone.value = "";
    dueAmount.value = "";

    alert("✅ Due Saved");

});

// Live Due List
onValue(dueRef, (snapshot) => {

    dueTable.innerHTML = "";

    if (!snapshot.exists()) return;

    snapshot.forEach((item) => {

        const data = item.val();

        dueTable.innerHTML += `
        <tr>
            <td>${data.name}</td>
            <td>${data.phone}</td>
            <td>৳ ${Number(data.amount).toLocaleString("en-BD")}</td>
        </tr>
        `;

    });

});
