const element = (
  // Write your code here.
  <div className="bgContainer">
    <div className="centerCard">
      <h1 className="heading">Congratulations</h1>
      <div className="cardContainer">
        <img
          src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
          className="imgSize"
        />
        <h1 className="heading">Naidu Rampam</h1>
        <p className="paragraph">
          Bonam Venkata Chalamayya Engineering College Odalarevu
        </p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
          className="imgSize"
        />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
