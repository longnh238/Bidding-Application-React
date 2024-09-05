import { useState } from "react";
import "./Info.css";

function Info(props) {
  const [biddingAmount, setBiddingAmount] = useState(0);

  const onBiddingAmountChange = (e) => {
    setBiddingAmount(e.target.value);
  };

  const handlleBidding = (e) => {
    e.preventDefault();
    props.onBidding(biddingAmount);
    e.currentTarget.reset();
  };

  const handleSimulation = (e) => {
    e.preventDefault();
    props.onBidding("simulation");
  };

  const handleEdition = (e) => {
    e.preventDefault();
    props.onEdition();
  };

  const handleDeletion = (e) => {
    e.preventDefault();
    props.onDeletion();
  };

  return (
    <>
      <div className="item-info">
        <h3>
          {props.owner === import.meta.env.VITE_USER ? "💖 " : ""}
          {props.name}
        </h3>
        <p>{props.description}</p>
        <form action="" onSubmit={handlleBidding}>
          {props.owner !== import.meta.env.VITE_USER ? (
            <>
              <input
                type="number"
                id={`bidItem${props.id}`}
                placeholder="Enter your bid"
                onChange={onBiddingAmountChange}
              />
              <button type="submit" className="bid-button">
                Place Bid
              </button>
            </>
          ) : null}
          {props.owner !== import.meta.env.VITE_USER ? (
            <button
              type="button"
              className="bid-button"
              onClick={handleSimulation}
            >
              Run Simulation
            </button>
          ) : (
            <button
              type="button"
              className="bid-button"
              onClick={handleSimulation}
              style={{ marginLeft: "0rem" }}
            >
              Run Simulation
            </button>
          )}
          {props.owner === import.meta.env.VITE_USER ? (
            <>
              <button
                type="button"
                className="edit-button"
                onClick={handleEdition}
              >
                Edit Item
              </button>
              <button
                type="button"
                className="delete-button"
                onClick={handleDeletion}
              >
                Delete Item
              </button>
            </>
          ) : null}
        </form>
      </div>
      <img src={props.image} alt="Item 1" />
    </>
  );
}

export default Info;
