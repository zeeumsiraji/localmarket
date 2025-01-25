// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// If you are using analytics, import it (optional)
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeRMaAw5pSm_EQLnOlnxMl-aZ7-sgAv8g",
  authDomain: "local-market-77b9c.firebaseapp.com",
  projectId: "local-market-77b9c",
  storageBucket: "local-market-77b9c.appspot.com", // Corrected storageBucket URL
  messagingSenderId: "384171111448",
  appId: "1:384171111448:web:faed154842e20bcad3bf6d",
  measurementId: "G-BQTTY50K3H",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Optional: Initialize Analytics only if needed
if (typeof window !== "undefined") {
  getAnalytics(app);
}

export default app;
