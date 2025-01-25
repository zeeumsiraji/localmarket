import React, { useState } from "react";
import { Link } from "react-router-dom";
import firebaseConfig from "../firebaseConfig";
import { getAuth, createUserWithEmailAndPassword, updateProfile, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Singup = () => {
  const auth = getAuth();
  const navigate = useNavigate();

  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [err, setErr] = useState("");

  let handleSubmit = () => {
    if (!name && !email && !password) {
      setErr("Fill the all details!");
    } else if (!name) {
      setErr("Enter your name!");
    } else if (!email) {
      setErr("Enter your email!");
    } else if (!password) {
      setErr("Enter your password!");
    } else if (password.length < 7) {
      setErr("Password need minimum 8 character!");
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          
          updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: name +".png",
          }).then(() => {
            // Profile updated!
            setErr("");
             navigate("/");
          });
        })
        .catch((error) => {
          console.log(error.code);
          if (error.code == "auth/email-already-in-use") {
            setErr("Email already in use!");
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
        <h2>Create a account!</h2>
        <input onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter your name" />
        <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter your email" />
        <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter your password" />
        <p>{err}</p>
        <button onClick={handleSubmit}>Singup</button>
        <Link to="/singin">You have already account? Singin</Link>
      </div>
    </div>
    </div>
  );
};

export default Singup;
