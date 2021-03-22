import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import "./Login.css";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
firebase.initializeApp(firebaseConfig);

const Login = () => {
  const [signeIn, setSigneIn] = useState({
    isSignedIn: false,
    name: "",
  });
  const provider = new firebase.auth.GoogleAuthProvider();
  //signUp with google
  const signInGoogle = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const { displayName } = result.user;
        const signInGoogle = {
          isSignIn: true,
          name: displayName,
        };
        setSigneIn(signInGoogle);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //signUp with gitHub
  const provider2 = new firebase.auth.GithubAuthProvider();
  const signInGitHub = () => {
    firebase
      .auth()
      .signInWithPopup(provider2)
      .then((result) => {})
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <Header signeIn={signeIn}></Header>
      <div className="login-from">
        <div className="login-container">
          <h2>Login</h2>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                className="field"
                type="email"
                placeholder="Enter email"
                required
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Control
                className="field"
                type="password"
                placeholder="Password"
                required
              />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember Me" />
            </Form.Group>
            <Link to="/availableRide">
              {" "}
              <Button className="btn login-btn" type="submit">
                Login
              </Button>
            </Link>
            <p>
              Don't have account?{" "}
              <Link to="/createAccount">Create an account</Link>
            </p>
          </Form>
        </div>
      </div>
      <div className="continue">
        <Button
          onClick={signInGoogle}
          variant="outline-secondary"
          type="submit"
        >
          Login with Google
        </Button>
        <br />
        <Button
          onClick={signInGitHub}
          variant="outline-secondary"
          type="submit"
        >
          Login with GitHub
        </Button>
      </div>
    </div>
  );
};

export default Login;
