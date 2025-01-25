import React, { useState } from "react";
import { Link } from "react-router-dom";
import firebaseConfig from "../firebaseConfig";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "./Singin.css"

const Singin = () => {
  const auth = getAuth();
  const navigate = useNavigate();

  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [err, setErr] = useState("");

  let handleSubmit = () => {
    if (!email && !password) {
      setErr("Fill the all details!");
    } else if (!email) {
      setErr("Enter your email!");
    } else if (!password) {
      setErr("Enter your password!");
    } else if (password.length < 7) {
      setErr("Password need minimum 8 character!");
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          setErr("");
          navigate("/");
        })
        .catch((error) => {
          console.log(error.code);
          if (error.code == "auth/wrong-password") {
            setErr("Wrong password!");
          } else if (error.code == "auth/user-not-found") {
            setErr("Wrong email!");
          } else {
            setErr("");
          }
        });
    }
  };

  onAuthStateChanged(auth, (user) => {
    if (user) {
      navigate("/");
    }
  });

  return (
    <div className="Page">
    <div id="singup">
      <div className="singup">
        <h2>Login your account!</h2>
        <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter your email" />
        <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter your password" />
        <p>{err}</p>
        <button onClick={handleSubmit}>Singin</button>
        <Link to="/singup">You have don't account? Singup</Link>
      </div>
    </div>
    </div>
  );
};

export default Singin;
