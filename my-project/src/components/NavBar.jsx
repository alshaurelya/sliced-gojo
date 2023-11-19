import React from 'react';
import('tailwindcss').Config

const Navbar = () => {
    const handleScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };

  return (
    <nav className="bg-gray-800 p-4 mb-6 fixed rounded-2xl">
      <ul className="flex justify-around">
        <li className="mr-6">
            <button onClick={() => handleScroll('home')} className="text-white font-normal hover:underline" type="button">
            Home</button>
        </li>


        <li className="mr-6">
            <button onClick={() => handleScroll('about')} className="text-white font-normal hover:underline" type="button">
            About</button>
        </li>

        <li>
            <button onClick={() => handleScroll('contact')} className="text-white font-normal hover:underline" type="button">
            Contact</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
