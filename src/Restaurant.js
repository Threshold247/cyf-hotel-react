import React, { useState } from "react";

const Restaurant = props => {
  const [order, setOrder] = useState(0);

  const incrementOrder = () => {
    setOrder(order + 1);
  };

  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <Order orderType="Pizzas" incrementOrder={incrementOrder} />
        <Order orderType="Salad" incrementOrder={incrementOrder} />
        <Order orderType="Meat" incrementOrder={incrementOrder} />
      </ul>
    </div>
  );
};

//Restaurant component renders a button with the incrementOrder UseSate function
const RestaurantButton = props => {
  return (
    <button className="btn btn-success" onClick={props.incrementOrder}>
      Add
    </button>
  );
};

//Seaparate Order component to render useState which adds an additional order
const Order = props => {
  const [order, setOrder] = useState(0);

  const incrementOrder = () => {
    setOrder(order + 1);
  };
  return (
    <li>
      {" "}
      {props.orderType}:{order}{" "}
      <RestaurantButton incrementOrder={incrementOrder} />
    </li>
  );
};

export default Restaurant;
