import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Images, } from "../Constantes";
import {hamburgerMenu, close, settings} from '../assets'


const Navbar = ({ onClick}) => {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => setToggle(!toggle);

  return (
    <div className="w-full h-[80px] bg-white border-b">
      <div className="md:max-w-[1480px] max-w-[600px] m-auto w-full h-full flex justify-between items-center md:px-8 px-8">
        <img src={Images.logo} className="h-[50px]" />

        <div className="hidden md:flex items-center ">
          <ul className="flex gap-4">
            <li>
              <Link to="/" className="hover:text-[#00296b]">
                Accueil
              </Link>
            </li>
            <li>
              <Link to="/cours" className="hover:text-[#00296b]">
                Cours
              </Link>
            </li>
            <li>
              <Link to="/tuteurs" className="hover:text-[#00296b]">
                Tuteurs
              </Link>
            </li>
            <li>
              <Link to="/projets" className="hover:text-[#00296b]">
                Projets
              </Link>
            </li>
            <li>
              <Link to="/Blogs" className="hover:text-[#00296b]">
                Blogs
              </Link>
            </li>
          </ul>
        </div>

        <div className="hidden md:flex">
          <button onClick={onClick} className="flex justify-between items-center  bg-transparent  px-6 gap-2">
            Inscription
          </button>
          <button
            onClick={onClick}
            className="px-8 py-3 rounded-md bg-[#00296b] text-white font-bold"
          >
            Connexion
          </button>
          <button
            onClick={onClick}
            className="flex justify-between items-center  bg-transparent  px-6 gap-2"
          >
          <img src={Images.profil1} className="h-[40px] rounded-full" />
          </button>
        </div>

        <div className="md:hidden" onClick={handleClick}>
          <img src={toggle?close:hamburgerMenu} />
        </div>
      </div>

      <div
        className={
          toggle
            ? "absolute z-10 p-4  bg-white w-full px-8 md:hidden border-b"
            : "hidden"
        }
      >
        <ul>
          <li className="p-4 hover:bg-gray-100">
            <Link to="/Home">Accueil</Link>
          </li>
          <li className="p-4 hover:bg-gray-100">
            <Link to="/Cours">Cours</Link>
          </li>
          <li className="p-4 hover:bg-gray-100">
            <Link to="/Tuteurs">Tuteurs</Link>
          </li>
          <li className="p-4 hover:bg-gray-100">
            <Link to="/Projets">Projets</Link>
          </li>
          <li className="p-4 hover:bg-gray-100">
            <Link to="/Blogs">Blogs</Link>
          </li>
          <div className="flex flex-col my-4 gap-4">
          <button onClick={onClick} className="hover:text-[#00296b]">
                Inscription
              </button>
            <button
              onClick={onClick}
              className="border-none px-8 py-5 rounded-md bg-[#00296b] text-white font-bold"
            >
              Connexion
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
