import React from "react";

const Navbar = () => {
  return (
      <header className="mt-0 pt-0">
        <div class="logo">
          <div class="logo-icon">
            <i class="fas fa-leaf"></i>
          </div>
          <div class="logo-text">PlantScan</div>
        </div>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/history">History</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
          </ul>
        </nav>
      </header>
  );
};

export default Navbar;
