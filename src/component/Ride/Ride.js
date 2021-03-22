import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import fakeRide from "../../fakeData/fakeData.json";
import RideCard from "../RideCard/RideCard";
import "./Ride.css";
const Ride = () => {
  const [rides, setRides] = useState([]);
  useEffect(() => {
    setRides(fakeRide);
  }, []);
  return (
    <div className="ride">
      {rides.map((ride) => (
        <Link to="/createAccount">
          <RideCard ride={ride}></RideCard>
        </Link>
      ))}
    </div>
  );
};

export default Ride;
