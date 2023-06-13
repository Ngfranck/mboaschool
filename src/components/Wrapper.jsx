import { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Modal from "./Modal"
import Inscription from "./Inscription";

const Wrapper = () => {
  const [showModal, setShowModal] = useState(false);
  const [showInscription, setShowInsctiption] = useState(false);

  const handleButtonClick = () => {
    setShowModal("Modal");
    setShowInsctiption("Inscription");
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setShowInsctiption(false);
  };

  

  return (
    <>
      <Navbar onClick={handleButtonClick}/>
      {showModal === "Modal" && (<Modal onClose={handleCloseModal} />)}
      {showInscription === "Inscription" && (<Inscription onClose={handleCloseModal} />)}
      <Outlet/>
      <Footer/>
    </>
  );
}

export default Wrapper;