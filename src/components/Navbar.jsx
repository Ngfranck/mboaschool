import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Images } from "../Constantes";
import Home from "../screnns/Home";
import Cours from "../screnns/Cours";
import Tuteurs from "../screnns/Tuteurs";
import Blogs from "../screnns/Blogs";

const Navbar = ({ showModal }) => {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => setToggle(!toggle);

  return (
    <div className="w-full h-[80px] bg-white border-b">
      <div className="md:max-w-[1480px] max-w-[600px] m-auto w-full h-full flex justify-between items-center md:px-8 px-8">
        <img src={Images.logo} className="h-[25px]" />

        <div className="hidden md:flex items-center ">
          <ul className="flex gap-4">
            <li>
              <Link to="/Home" className="hover:text-[#00296b]">
                Accueil
              </Link>
            </li>
            <li>
              <Link to="/Cours" className="hover:text-[#00296b]">
                Cours
              </Link>
            </li>
            <li>
              <Link to="/Tuteurs" className="hover:text-[#00296b]">
                Tuteurs
              </Link>
            </li>
            <li>
              <Link to="/Projets" className="hover:text-[#00296b]">
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
          <button className="flex justify-between items-center  bg-transparent  px-6 gap-2">
            Inscription
          </button>
          <button
            onClick={showModal}
            className="px-8 py-3 rounded-md bg-[#00296b] text-white font-bold"
          >
            Connexion
          </button>
        </div>

        <div className="md:hidden" onClick={handleClick}>
          <img src={toggle ? Images.close : Images.hamburgerMenu} />
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
            <button className="border border-[20B486] flex justify-center items-center  bg-transparent  px-6 gap-2 py-4">
              inscription
            </button>
            <button
              onClick={showModal}
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
