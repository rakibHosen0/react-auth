import React from "react";
import "./RideCard.css";

const RideCard = (props) => {
  const { img, type } = props.ride;
  return (
    <div className="ride-card">
      <div className="card-img">
        <img src={img} alt={type} />
      </div>
      <div className="card-title">
        <h2>{type}</h2>
      </div>
    </div>
  );
};

export default RideCard;
