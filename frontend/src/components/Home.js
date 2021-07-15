import React from "react";
import { Link } from "react-router-dom";

function Home(props) {
  return (
    <div className="backgroundimg">
      <h1>Cinema Ironhack</h1>
      <Link to="/movies">
        <button>Check the movies!</button>
      </Link>
    </div>
  );
}

export default Home;
