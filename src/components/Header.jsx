import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Header.css";

function Header(props) {
  return (
    <header>
      <div className="header-overlay">
        <div className="header-content">
          <h1>Heritage Vases Bidding Application</h1>
          <p>Place your bids on exclusive items</p>
          <div className="total-bids">
            Total Bids of All Items:{" "}
            <span id="totalBids">{props.totalBids}</span>
          </div>
          <nav className="navbar navbar-expand-lg navbar-light justify-content-center">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/bidding">
                  Bidding
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/addItem">
                  Add Item
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
