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
  apiKey: "AIzaSyDQblfbpE2-kt7H9V39GaEa3pNciMmnzVk",
  authDomain: "ss-telecom-53c74.firebaseapp.com",
  databaseURL: "https://ss-telecom-53c74-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ss-telecom-53c74",
  storageBucket: "ss-telecom-53c74.firebasestorage.app",
  messagingSenderId: "277290596365",
  appId: "1:277290596365:web:87ecdfae1e1c982cad3d44"
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
