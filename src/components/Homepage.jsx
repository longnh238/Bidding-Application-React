import { useNavigate } from "react-router-dom";
import "./Homepage.css";
import vaseImage from "/vase_banner.jpg";

const Homepage = () => {
  const navigate = useNavigate();

  return (
    <div className="homepage-container">
      <h1>Heritage Auction House: Premier Bidding on Ancient Chinese Vases</h1>
      <img src={vaseImage} alt="Ancient Chinese Vase" className="vase-image" />
      <section>
        <h2>Welcome to Heritage Auction House</h2>
        <p>
          Discover the exquisite beauty and timeless elegance of ancient Chinese
          vases. Join our community of collectors and enthusiasts in the premier
          online marketplace dedicated to auctioning rare and authentic Chinese
          vases.
        </p>
      </section>
      <section>
        <h2>Bid on Timeless Treasures</h2>
        <p>
          Uncover a world of heritage and artistry with our exclusive collection
          of ancient Chinese vases. Participate in live auctions and secure your
          piece of history. Each vase tells a story, waiting for you to be its
          next chapter.
        </p>
      </section>
      <section>
        <h2>Authenticity Guaranteed</h2>
        <p>
          At Heritage Auction House, we pride ourselves on offering only the
          most genuine and meticulously authenticated Chinese vases. Our experts
          ensure that every piece meets the highest standards of quality and
          historical significance.
        </p>
      </section>
      <section>
        <h2>Join the Community</h2>
        <p>
          Connect with fellow collectors and experts through our online
          platform. Share insights, discuss the rich history of Chinese pottery,
          and bid on exceptional pieces in a supportive and passionate
          community.
        </p>
      </section>
      <section>
        <h2>Secure and Transparent Bidding</h2>
        <p>
          Experience the thrill of bidding with our secure and transparent
          auction system. Our user-friendly interface ensures a seamless process
          from browsing to bidding, so you can focus on winning your desired
          piece.
        </p>
      </section>
      <section>
        <h2>Curated Collections</h2>
        <p>
          Explore our curated collections featuring vases from various
          dynasties, each with its unique charm and historical value. Whether
          you are a seasoned collector or a newcomer, you will find something to
          captivate your interest.
        </p>
      </section>
      <section>
        <h2>Exclusive Auctions</h2>
        <p>
          Gain access to exclusive auctions of rare and highly sought-after
          Chinese vases. Don’t miss the opportunity to add extraordinary pieces
          to your collection, available only at Heritage Auction House.
        </p>
      </section>
      <section>
        <h2>Expert Insights</h2>
        <p>
          Benefit from the deep knowledge and expertise of our community. Our
          experts provide insights into the historical and cultural significance
          of each vase, helping you to make informed decisions and deepen your
          appreciation of these timeless treasures.
        </p>
      </section>
      <button
        className="start-journey-button"
        onClick={() => {
          window.scrollTo(0, 0);
          navigate("/bidding");
        }}
      >
        Start your journey
      </button>
    </div>
  );
};

export default Homepage;
