import { rtdb } from "../firebase.js";

import {
  ref,
  onValue
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-database.js";

const stockRef = ref(rtdb, "products");

const products = document.getElementById("products");
const qty = document.getElementById("qty");
const value = document.getElementById("value");
const stockTable = document.getElementById("stockTable");

onValue(stockRef, (snapshot) => {

    stockTable.innerHTML = "";

    let totalProducts = 0;
    let totalQty = 0;
    let totalValue = 0;

    snapshot.forEach((item) => {

        const data = item.val();

        const productName = data.name || "-";
        const category = data.category || "-";
        const quantity = Number(data.quantity || 0);
        const buyPrice = Number(data.buyPrice || 0);

        const stockValue = quantity * buyPrice;

        totalProducts++;
        totalQty += quantity;
        totalValue += stockValue;

        stockTable.innerHTML += `
        <tr>
            <td>${productName}</td>
            <td>${category}</td>
            <td>${quantity}</td>
            <td>৳ ${buyPrice}</td>
            <td>৳ ${stockValue}</td>
        </tr>
        `;

    });

    products.textContent = totalProducts;
    qty.textContent = totalQty;
    value.textContent = "৳ " + totalValue.toLocaleString();

});
