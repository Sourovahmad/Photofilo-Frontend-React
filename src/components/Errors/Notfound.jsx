import React from "react";
import { Link } from "react-router-dom";
import './Notfound.css';

const Notfound = () => {
  return (
    <div>
      <div id="body_Section">
        <section class="notFound">

          <div class="img">
    <Link to="/">
            <img
              src="https://assets.codepen.io/5647096/backToTheHomepage.png"
              alt="Back to the Homepage"
            />
     </Link>
            <img
              src="https://assets.codepen.io/5647096/Delorean.png"
              alt="El Delorean, El Doc y Marti McFly"
            />
          </div>
          <div class="text">
            <h1>404</h1>
            <h2>PAGE NOT FOUND</h2>
            <h3>BACK TO HOME?</h3>
          <Link to="/">  
              YES
              </Link>
            <a href="https://www.github.com/sourovahmad">NO</a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Notfound;
