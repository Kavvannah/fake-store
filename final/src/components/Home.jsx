import React from "react";

const Home = () => {
  return (
    <div className="parrallax">
      <div class="card text-bg-dark border-0">
        <img
          src="/assets/laura-chouette-JKOD4x9A79Y-unsplash.jpg"
          class="card-img"
          alt="Background"
          height="500px"
        />
        <div class="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 class="card-title display-3 fw-bolder">SALE BELL RINGS</h5>
            <p class="card-text lead fs-2">
              Ali Beauty and New in this week
            </p>
            <p class="card-text lead fs-2">
              Up to 70% off selected items
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
