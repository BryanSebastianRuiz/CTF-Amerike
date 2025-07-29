// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getDatabase, ref, set, push, get, child } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyBsuhnp0xJopIIBI4ZBYVXDwEEMvL1MTk8",
  authDomain: "ctf1-7cbe9.firebaseapp.com",
  databaseURL: "https://ctf1-7cbe9-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ctf1-7cbe9",
  storageBucket: "ctf1-7cbe9.appspot.com",
  messagingSenderId: "984914597940",
  appId: "1:984914597940:web:41be81cf42f2f80833d261",
  measurementId: "G-809FLYCZBT"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db, ref, set, push, get, child };
