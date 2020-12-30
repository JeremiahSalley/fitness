import React from "react";
import "./nav.css";

function Nav() {
  return (
    <div className="nav">
      <header>
        <ol>
        <h1 id="logo">Your Logo Here </h1>
          <li>More</li>
          <li>Questions</li>
          <li>Testimonials</li>
          <li>About</li>
          <li>Book Online</li>
          <li>Home</li>
        </ol>
      </header>
    </div>
  );
}

export default Nav;
