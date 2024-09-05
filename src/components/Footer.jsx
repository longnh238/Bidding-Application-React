import "./Footer.css";

function Footer() {
  return (
    <>
      <footer>
        <div className="footer-overlay">
          <div className="footer-content">
            <div className="footer-section about">
              <h2>About Us</h2>
              <p>
                This is Group 3 of the CSIS-3380-002 Full Stack Development with
                JavaScript course for the Summer 2024 semester.
              </p>
            </div>
            <div className="footer-section contact">
              <h2>Members</h2>
              <p>Hoang Long Nguyen, Buu Nguyen, Tung Vu, Phoebe Le</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Group 3. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
