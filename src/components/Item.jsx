import { useState } from "react";
import Info from "./items/Info";
import List from "./items/List";
import MessageModal from "./MessageModal";
import "./Item.css";
import axios from "axios";

function Item(props) {
  const item = props.data;
  const username = import.meta.env.VITE_USER;

  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const [showAllBids, setShowAllBids] = useState(false);

  const handleTopBidding = (value) => {
    const maxBid = item.bids.length > 0 ? item.bids[0].amount : 100;
    if (value === "simulation") {
      axios
        .get(import.meta.env.VITE_API_URL + "users/getRandomUser")
        .then((response) => {
          const randomPerson = response.data.name;
          props.onUpdateListBidding(
            item._id,
            randomPerson,
            Math.floor(Math.floor(maxBid * (1 + Math.random())) / 10) * 10 + 10
          );
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      if (value <= maxBid) {
        setModalMessage(
          `The bidding amount has to be a positive number larger than the max bid ($${maxBid})`
        );
        setShowModal(true);
      } else {
        props.onUpdateListBidding(item._id, username, value);
      }
    }
  };

  const handleItemEdition = () => {
    props.onEditItem(item._id, item.name, item.description, item.image);
  };

  const handleItemDeletion = () => {
    props.onDeleteItem(item._id);
  };

  const handleCloseModal = () => setShowModal(false);

  const toggleShowAllBids = () => setShowAllBids(!showAllBids);

  return (
    <div id={item.id} className="item">
      <Info
        id={item._id}
        name={item.name}
        description={item.description}
        owner={item.owner}
        image={item.image}
        onBidding={handleTopBidding}
        onEdition={handleItemEdition}
        onDeletion={handleItemDeletion}
      />
      <List
        bids={item.bids}
        showAll={showAllBids}
        onToggleShowAllBids={toggleShowAllBids}
      />
      <MessageModal
        show={showModal}
        handleClose={handleCloseModal}
        message={modalMessage}
      />
    </div>
  );
}

export default Item;
