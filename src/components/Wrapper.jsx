import { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Modal from "./Modal"

const Wrapper = () => {
  const [showModal, setShowModal] = useState(false);

  const handleButtonClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Navbar showModal={handleButtonClick}/>
      {showModal && <Modal onClose={handleCloseModal} />}
      <Outlet/>
      <Footer/>
    </>
  );
}

export default Wrapper;