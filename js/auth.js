import { auth } from "../firebase.js";

import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

const loginForm = document.getElementById("loginForm");

// ===============================
// Login
// ===============================

if (loginForm) {

  loginForm.addEventListener("submit", async (e) => {

    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    try {

      await signInWithEmailAndPassword(auth, email, password);

      alert("✅ Login Successful");

      location.href = "dashboard.html";

    } catch (error) {

      alert("❌ " + error.message);

    }

  });

}

// ===============================
// Auto Login Check
// ===============================

onAuthStateChanged(auth, (user) => {

  if (user && location.pathname.includes("login.html")) {

    location.href = "dashboard.html";

  }

});

// ===============================
// Logout Function
// ===============================

window.logout = async function () {

  const ok = confirm("Are you sure you want to logout?");

  if (!ok) return;

  try {

    await signOut(auth);

    location.href = "login.html";

  } catch (error) {

    alert(error.message);

  }

};
