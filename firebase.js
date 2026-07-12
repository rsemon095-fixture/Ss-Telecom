// ==============================
// SS TELECOM Firebase Config
// ==============================

// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

import { getDatabase } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-database.js";


// ==============================
// Firebase Configuration
// ==============================

const firebaseConfig = {

  apiKey: "YOUR_API_KEY",

  authDomain: "YOUR_PROJECT.firebaseapp.com",

  databaseURL: "https://YOUR_PROJECT-default-rtdb.firebaseio.com",

  projectId: "YOUR_PROJECT",

  storageBucket: "YOUR_PROJECT.firebasestorage.app",

  messagingSenderId: "YOUR_SENDER_ID",

  appId: "YOUR_APP_ID"

};


// ==============================
// Initialize Firebase
// ==============================

const app = initializeApp(firebaseConfig);


// ==============================
// Services
// ==============================

const auth = getAuth(app);

const db = getFirestore(app);

const rtdb = getDatabase(app);


// ==============================
// Export
// ==============================

export {

  app,

  auth,

  db,

  rtdb

};
