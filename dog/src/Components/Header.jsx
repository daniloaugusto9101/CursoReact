import React from 'react';
import { Link } from 'react-router-dom';
import { FaDog, FaUser } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="shadow m-auto px-8 py-5 fixed bg-white z-50 top-0 w-full">
      <nav className="flex justify-between items-center max-w-3xl m-auto">
        <Link to="/" aria-label="Dogs - Home">
          <FaDog className="text-2xl" />
        </Link>
        <Link to="/login" className="flex items-center gap-3">
          Login / Criar
          <FaUser />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
