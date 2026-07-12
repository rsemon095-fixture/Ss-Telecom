import { rtdb } from "../firebase.js";

import {
  ref,
  push,
  set,
  onValue
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-database.js";

// Firebase Reference
const productRef = ref(rtdb, "products");

// HTML Elements
const productName = document.getElementById("productName");
const category = document.getElementById("category");
const buyPrice = document.getElementById("buyPrice");
const sellPrice = document.getElementById("sellPrice");
const quantity = document.getElementById("quantity");

const saveBtn = document.getElementById("saveProduct");

const productTable = document.getElementById("productTable");
const totalProducts = document.getElementById("totalProducts");
const totalQty = document.getElementById("totalQty");

// Save Button
saveBtn.addEventListener("click", saveProduct);

// Save Product
async function saveProduct() {

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
        alert("সব তথ্য সঠিকভাবে লিখুন");
        return;
    }

    const newProduct = push(productRef);

    await set(newProduct, {
        id: newProduct.key,
        name,
        category: cat,
        buyPrice: buy,
        sellPrice: sell,
        quantity: qty,
        createdAt: Date.now()
    });

    alert("✅ Product Saved Successfully");

    productName.value = "";
    buyPrice.value = "";
    sellPrice.value = "";
    quantity.value = "";
}
// ===========================
// Live Product List
// ===========================

onValue(productRef, (snapshot) => {

    productTable.innerHTML = "";

    let productCount = 0;
    let quantityCount = 0;

    if (!snapshot.exists()) {
        totalProducts.textContent = "0";
        totalQty.textContent = "0";
        return;
    }

    snapshot.forEach((item) => {

        const data = item.val();

        productCount++;
        quantityCount += Number(data.quantity || 0);

        productTable.innerHTML += `
        <tr data-id="${data.id}">
            <td>${data.name}</td>
            <td>${data.category}</td>
            <td>৳ ${Number(data.buyPrice).toLocaleString()}</td>
            <td>৳ ${Number(data.sellPrice).toLocaleString()}</td>
            <td>${data.quantity}</td>
        </tr>
        `;

    });

    totalProducts.textContent = productCount;
    totalQty.textContent = quantityCount;

});
// ===========================
// Helper Functions
// ===========================

function clearForm() {

    productName.value = "";
    buyPrice.value = "";
    sellPrice.value = "";
    quantity.value = "";

    category.selectedIndex = 0;

}

function formatMoney(value) {

    return "৳ " + Number(value).toLocaleString("en-BD");

}

console.log("✅ Products Module Ready");
