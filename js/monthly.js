import { rtdb } from "../firebase.js";

import {
ref,
onValue
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-database.js";

const loadRef = ref(rtdb,"flexiload");
const moneyRef = ref(rtdb,"addMoney");
const dueRef = ref(rtdb,"dueMoney");
const productRef = ref(rtdb,"products");

const monthLoad=document.getElementById("monthLoad");
const monthMoney=document.getElementById("monthMoney");
const monthDue=document.getElementById("monthDue");
const monthProduct=document.getElementById("monthProduct");

function total(refData,element){

onValue(refData,(snapshot)=>{

let total=0;

snapshot.forEach((item)=>{

const data=item.val();

total+=Number(data.amount||0);

});

element.textContent="৳ "+total.toLocaleString("en-BD");

});

}

total(loadRef,monthLoad);
total(moneyRef,monthMoney);
total(dueRef,monthDue);

onValue(productRef,(snapshot)=>{

let count=0;

snapshot.forEach(()=>{

count++;

});

monthProduct.textContent=count;

});
