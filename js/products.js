import { rtdb } from "../firebase.js";

import {
  ref,
  push
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-database.js";

const productRef = ref(rtdb, "products");

const productName = document.getElementById("productName");
const category = document.getElementById("category");
const buyPrice = document.getElementById("buyPrice");
const sellPrice = document.getElementById("sellPrice");
const quantity = document.getElementById("quantity");

const saveBtn = document.getElementById("saveProduct");

saveBtn.addEventListener("click", saveProduct);

function saveProduct() {

    const name = productName.value.trim();
    const cat = category.value;
    const buy = Number(buyPrice.value);
    const sell = Number(sellPrice.value);
    const qty = Number(quantity.value);

    if (!name) {
        alert("Product Name লিখুন");
        return;
    }

    if (buy <= 0 || sell <= 0 || qty <= 0) {
        alert("সঠিক Buy, Sell ও Quantity লিখুন");
        return;
    }

    push(productRef, {
        name: name,
        category: cat,
        buyPrice: buy,
        sellPrice: sell,
        quantity: qty,
        createdAt: Date.now()
    });

    alert("✅ Product Saved");

    productName.value = "";
    buyPrice.value = "";
    sellPrice.value = "";
    quantity.value = "";
      }
import {
  onValue
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-database.js";

const productTable = document.getElementById("productTable");
const totalProducts = document.getElementById("totalProducts");
const totalQty = document.getElementById("totalQty");

onValue(productRef, (snapshot) => {

    productTable.innerHTML = "";

    let productCount = 0;
    let quantityCount = 0;

    snapshot.forEach((item) => {

        const data = item.val();

        productCount++;

        quantityCount += Number(data.quantity || 0);

        productTable.innerHTML += `
        <tr>
            <td>${data.name}</td>
            <td>${data.category}</td>
            <td>৳ ${data.buyPrice}</td>
            <td>৳ ${data.sellPrice}</td>
            <td>${data.quantity}</td>
        </tr>
        `;

    });

    totalProducts.textContent = productCount;
    totalQty.textContent = quantityCount;

});
