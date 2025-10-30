import React from "react";
import { NavLink } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <div className="flex items-center justify-between py-3">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-gradient-to-tr from-sky-400 to-indigo-500 rounded-full flex items-center justify-center shadow-md text-black font-bold">SX</div>
        <div>
          <h1 className="text-2xl md:text-2xl font-extrabold tracking-tight">SpaceX Launches</h1>
          <p className="text-sm text-slate-400">A simple directory of recent launches</p>
        </div>
      </div>

      <nav className="hidden md:flex items-center gap-4 text-sm text-slate-200">
        <NavLink to="/" className={({ isActive }) => isActive ? 'text-white font-semibold' : 'text-slate-300 hover:text-white'}>Home</NavLink>
        <NavLink to="/launches" className={({ isActive }) => isActive ? 'text-white font-semibold' : 'text-slate-300 hover:text-white'}>Launches</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? 'text-white font-semibold' : 'text-slate-300 hover:text-white'}>About</NavLink>
      </nav>
    </div>
  );
}

export default Header;

