import { useState } from "react";
import React from "react";
// import { Link } from "react-router-dom";
import Courriel from "./Courriel";

function TutorsGrid() {
  const [showCourriel, setShowCourriel] = useState(false);

  const handleClicBouton = () => {
    setShowCourriel(true);
  };

  const handleCloseCourriel = () => {
    setShowCourriel(false);
  };
  const tutors = [
    {
      id: 1,
      name: "Tuteur 1",
      description: "Description du tuteur 1 et de ses compétences",
      price: 20,
    },
    {
      id: 2,
      name: "Tuteur 2",
      description: "Description du tuteur 2 et de ses compétences",
      price: 25,
    },
    {
      id: 3,
      name: "Tuteur 3",
      description: "Description du tuteur 3 et de ses compétences",
      price: 30,
    },
  ];

  return (
    <div className="grid grid-cols-1 mb-[30px] sm:grid-cols-2 md:grid-cols-3 gap-4">
      {tutors.map((tutor) => (
        <div
          key={tutor.id}
          className="bg-white rounded-md shadow-md overflow-hidden"
        >
          <img
            src="https://i.pinimg.com/736x/69/a8/85/69a885fc84bacfd1cfa8b9c96388e2a8.jpg"
            alt="Tutor Image"
            className="h-48 w-full object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-medium text-gray-900">{tutor.name}</h3>
            <p className="mt-2 text-base text-gray-500">{tutor.description}</p>
            <div className="mt-4 flex items-center justify-between">
              <button onClick={handleClicBouton}>Courriel</button>
              <span className="text-sm text-gray-500">
                {tutor.price} € / heure
              </span>
            </div>
          </div>
        </div>
      ))}
      {showCourriel && <Courriel onClose={handleCloseCourriel} />}
    </div>
  );
}

export default TutorsGrid;
