import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const activeClassName = 'underline';
  return (
    <header
      className="flex justify-between items-center border-solid border-b border-slate-700 mx-10 py-3 h-1/6 w-screen"
    >
      <div
        className="flex items-center gap-4"
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
        className="flex gap-4 text-cyan-600"
      >
        <NavLink to="/rockets" className={({ isActive }) => (isActive ? activeClassName : undefined)}>Rockets</NavLink>
        <h2>Missions</h2>
        <span className="text-black">|</span>
        <NavLink to="/" className={({ isActive }) => (isActive ? activeClassName : undefined)}>My Profile</NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
