import React from "react";
import { Container } from "react-bootstrap";
import Header from "../Header/Header";
import Ride from "../Ride/Ride";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Container className="home-container">
        <Header />
        <Ride />
      </Container>
    </div>
  );
};

export default Home;
