import "./List.css";

function List(props) {
  const bids = props.bids;
  const bidsToShow = props.showAll ? bids : bids.slice(0, 5);

  const disabledToggle = bids.length <= 5 ? true : false;

  const handleToggleShowBids = (e) => {
    if (disabledToggle) {
      e.preventDefault();
    } else {
      e.preventDefault();
      props.onToggleShowAllBids();
    }
  };

  return (
    <div className="highest-bids">
      <div className="bids-header">
        <h3>Total Bids: {bids.length}</h3>
        <h4>Highest Bids</h4>
      </div>
      <ul className="highestBidsList" id="highestBidsList1">
        {bidsToShow.map((bid, index) => (
          <li key={index}>
            {index + 1}) {bid.name}: ${bid.amount}
          </li>
        ))}
      </ul>
      <a
        href="#"
        className={`toggle-bids-link ${disabledToggle ? "disabled" : ""}`}
        onClick={handleToggleShowBids}
      >
        {props.showAll ? "Show Top 5 Highest Bids" : "Show All"}
      </a>
    </div>
  );
}

export default List;
