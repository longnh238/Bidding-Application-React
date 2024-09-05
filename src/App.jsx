import { useEffect, useState } from "react";
import "./App.css";
import AddItem from "./components/AddItem";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Item from "./components/Item";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import MessageModal from "./components/MessageModal";
import EditionModal from "./components/EditionModal";

function App() {
  const [originalItems, setOriginalItems] = useState(null);
  const [items, setItems] = useState(null);

  const [totalBids, setTotalBids] = useState(null);
  const [dataUpdated, setDataUpdated] = useState(false);

  const [showMessageModal, setShowMessageModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const [showEditionModal, setShowEditionModal] = useState(false);
  const [itemEditionData, setItemEditionData] = useState({
    name: "Example Item",
    description: "This is an example description.",
    image: "http://example.com/image.jpg",
  });

  useEffect(() => {
    axios
      .get(import.meta.env.VITE_API_URL + "items")
      .then((response) => {
        const itemsData = response.data;
        setItems(itemsData);
        setOriginalItems(itemsData); // Storing for searching
        setTotalBids(calculateTotalBids(itemsData));
      })
      .catch((error) => {
        console.log(error);
      });
  }, [dataUpdated]);

  const handleBiddingList = (id, name, amount) => {
    items.map((item) => {
      if (item._id === id) {
        const highestBid = {
          name: name,
          amount: Number(amount),
        };
        item.bids.unshift(highestBid);

        axios
          .put(import.meta.env.VITE_API_URL + "items/" + item._id, item)
          .then(() => {
            setDataUpdated((prev) => !prev);
          })
          .catch((error) => {
            console.log(error);
          });
      }
      return item;
    });

    setTotalBids((prevTotalBids) => prevTotalBids + 1);
  };

  const handleAddItem = (name, description, image) => {
    const newItem = {
      name: name,
      description: description,
      owner: import.meta.env.VITE_USER,
      image: image,
      bids: [],
    };

    axios
      .post(import.meta.env.VITE_API_URL + "items/", newItem)
      .then(() => {
        setModalMessage(`The item has been added successfully`);
        setShowMessageModal(true);
        setDataUpdated((prev) => !prev);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleItemEdition = (id, name, description, image) => {
    const data = {
      id: id,
      name: name,
      description: description,
      image: image,
    };
    setItemEditionData(data);
    setShowEditionModal(true);
  };

  const handleSaveEditionModal = (editedItem) => {
    axios
      .get(import.meta.env.VITE_API_URL + "items/" + editedItem.id)
      .then((item) => item.data)
      .then((currentItem) => {
        editedItem.owner = currentItem.owner;
        editedItem.bids = currentItem.bids;

        axios
          .put(
            import.meta.env.VITE_API_URL + "items/" + editedItem.id,
            editedItem
          )
          .then(() => {
            setModalMessage(`The item has been updated successfully`);
            setShowMessageModal(true);
            setDataUpdated((prev) => !prev);
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => {
        console.log(error);
      });
    setShowEditionModal(false);
  };

  const handleItemDeletion = (id) => {
    axios
      .delete(import.meta.env.VITE_API_URL + "items/" + id)
      .then(() => {
        setModalMessage(`The item has been deleted successfully`);
        setShowMessageModal(true);
        setDataUpdated((prev) => !prev);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleItemSearch = (e) => {
    if (e.target.value !== "") {
      const filteredItem = originalItems.filter((item) => {
        if (item.name.toLowerCase().includes(e.target.value.toLowerCase()))
          return item;
      });
      setItems(filteredItem);
    } else {
      setItems(originalItems);
    }
  };

  const calculateTotalBids = (items) => {
    return items.reduce(
      (accumulator, currentItem) => accumulator + currentItem.bids.length,
      0
    );
  };

  const handleCloseMessageModal = () => setShowMessageModal(false);

  const handleCloseEditionModal = () => setShowEditionModal(false);

  if (items === null || totalBids === null) {
    return null; // Render nothing or a fallback UI
  }

  return (
    <>
      <Header totalBids={totalBids} />
      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/bidding"
            element={
              <section className="items">
                <h2>Items for Bidding</h2>
                <h6>
                  <strong>Place Bid (Group 3):</strong> This button suggests
                  that Group 3 is placing a bid
                </h6>
                <div className="search-container">
                  <h6>
                    <strong>Run Simulation (Another Person):</strong> This
                    button implies performing a simulation as if initiated by
                    another person
                  </h6>
                  <input
                    type="text"
                    className="search-box"
                    placeholder="Search items here..."
                    onChange={handleItemSearch}
                  />
                </div>
                {items != null && items.length ? (
                  items.map((item, index) => (
                    <Item
                      key={index}
                      data={item}
                      onUpdateListBidding={handleBiddingList}
                      onEditItem={handleItemEdition}
                      onDeleteItem={handleItemDeletion}
                    /> // Passing each item to the Item component
                  ))
                ) : (
                  <p style={{ textAlign: "center" }}>
                    No items available for bidding
                  </p>
                )}
              </section>
            }
          />
          <Route
            path="/addItem"
            element={<AddItem onAddItem={handleAddItem} />}
          />
        </Routes>
      </main>
      <MessageModal
        show={showMessageModal}
        handleClose={handleCloseMessageModal}
        message={modalMessage}
      />
      <EditionModal
        show={showEditionModal}
        handleClose={handleCloseEditionModal}
        handleSave={handleSaveEditionModal}
        id={itemEditionData.id}
        name={itemEditionData.name}
        description={itemEditionData.description}
        image={itemEditionData.image}
      />
      <Footer />
    </>
  );
}

export default App;
