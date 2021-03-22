import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "../Header/Header";

const CreateAccount = () => {
  return (
    <div>
      <div>
        <Header />
        <div className="login-from">
          <div className="login-container">
            <h2>Create an account</h2>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  type="text"
                  placeholder="Enter Your name"
                  required
                />
                <br />
                <Form.Control type="email" placeholder="Enter email" required />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" required />
                <br />

                <Form.Control
                  type="password"
                  placeholder="Confirm Password"
                  required
                />
              </Form.Group>

              <Link to="/availableRide">
                <Button className="btn login-btn" type="submit">
                  Create an Account
                </Button>
              </Link>

              <p>
                Already have an account ? <Link to="/Login">Login</Link>
              </p>
            </Form>
          </div>
        </div>
        <div className="continue">
          <Button variant="outline-secondary" type="submit">
            Login with Google
          </Button>
          <br />
          <Button variant="outline-secondary" type="submit">
            Login with Facebook
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
