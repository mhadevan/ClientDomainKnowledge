import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBFyvdbGYpXRFN7wwha4KN5XV0qHtQx0tA",
  authDomain: "clientdomainknowledge.firebaseapp.com",
  projectId: "clientdomainknowledge",
  storageBucket: "clientdomainknowledge.firebasestorage.app",
  messagingSenderId: "978785191593",
  appId: "1:978785191593:web:7264224106c7bc9bd88bb8"
};

const app = initializeApp(firebaseConfig);

window.db = getFirestore(app);
window.collection = collection;
window.addDoc = addDoc;
window.serverTimestamp = serverTimestamp;
