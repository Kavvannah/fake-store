import React from "react";
import Products from './Products';

const Home = () => {
  return (
    <div className="parrallax">
      <div className="card text-bg-dark border-0">
        <img
          src="/assets/laura-chouette-JKOD4x9A79Y-unsplash.jpg"
          className="card-img"
          alt="Background"
          height="500px"
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder">SALE BELL RINGS</h5>
            <p className="card-text lead fs-2">
              Ali Beauty and New in this week
            </p>
            <p className="card-text lead fs-2">
              Up to 70% off selected items
            </p>
          </div>
        </div>
      </div>
      
    {/* products */}
    <Products/>
    </div>
  );
};
export default Home;
