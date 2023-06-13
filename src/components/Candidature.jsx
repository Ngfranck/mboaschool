import React from "react";

const Candidature = () => {
  return (
    <div className="w-full bg-white py-0 p-10">
      <div className="md:max-w-[1480px] m-auto grid md:grid-cols-2 max-w-[600px]  px-4 md:px-0">
        <div className="flex flex-col justify-start gap-4">
          <h1 className="md:leading-[72px] py-2 md:text-6xl text-5xl font-semibold text-[#00296b]">
            Déposer vos candidatures
          </h1>
          <p>
            Le tutorat est une méthode d'apprentissage qui consiste à assigner
            un tuteur à un apprenant pour l'aider à atteindre ses objectifs
            d'apprentissage. Le tuteur est généralement un expert dans le
            domaine d'étude de l'apprenant et peut fournir une assistance
            personnalisée pour aider l'apprenant à comprendre les concepts
            difficiles, à améliorer ses compétences et à renforcer sa confiance
            en soi.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <button to='../screnns/Formulairtuteur' className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
      Démander un Tuteur
      </button>
      <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
      Planifier un rendez-vous avec un tuteur
      </button>
      <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
      canditature pour Tuteur
      </button>
      <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">
      commentaire sur la session
      </button>
    </div>
      </div>
    </div>
  );
};

export default Candidature;
