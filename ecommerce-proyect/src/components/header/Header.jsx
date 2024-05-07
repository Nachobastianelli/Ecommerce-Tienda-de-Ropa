import React from "react";

const Header = () => {
  return (
    <nav>
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">
        <slot></slot>
      </a>
    </nav>
  );
};

export default Header;
