import React, {useState} from 'react'
// import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Candidature from '../components/Candidature'
import  Modal from '../components/Modal'
import Features from '../components/Features'
import Teachers from '../components/Teachers'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
// import ResetPassword from '../components/ResetPassword'
// import TutorRequestForm from '../components/Tuteur'


export function Home(props) {
  const [showModal, setShowModal] = useState(false);

  const handleButtonClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };


  return (
    <div>
      {/* <Navbar showModal={handleButtonClick}/> */}
      <Hero/>
      <Candidature />
      {showModal && <Modal onClose={handleCloseModal} />}
      <Features/>
      <Teachers />
      <Testimonials/>
      <Contact />
      {/* <ResetPassword/> */}
      <Footer/>
      {/* <TutorRequestForm/> */}
    </div>
  )
}
