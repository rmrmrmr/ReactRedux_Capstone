import React from 'react';

const Navbar = () => (
  <header
    className="flex justify-between items-center"
  >
    <div
      className="flex items-center"
    >
      <img
        src="../img/planet.png"
        alt="PlanetLogo"
        className="h-16"
      />
      <h1
        className="text-3xl"
      >
        Space Traveler&apos;s Hub
      </h1>
    </div>
    <nav
      className="flex"
    >
      <h2>Rockets</h2>
      <h2>Missions</h2>
      <span>|</span>
      <h2>My Profile</h2>
    </nav>
  </header>
);

export default Navbar;
