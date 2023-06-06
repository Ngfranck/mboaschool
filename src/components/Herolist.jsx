import React from 'react';

function Herolist() {
  return (
    <div className="bg-gray-800">
      <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
       <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
          Bienvenue sur notre site Web
        </h1>
       <div className="mt-12 flex justify-center">
        <p className="mt-6 text-xl text-gray-300 max-w-3xl flex justify-center">
          Nous sommes une entreprise de développement de logiciels spécialisée dans la création d'applications web et mobiles modernes.
        </p>
       </div>
        <div className="mt-6 flex justify-center">
        <form className="bg-white border w-[400px] p-4 input-box-shadow rounded-md flex justify-between">
            <input
              className="bg-white outline-none"
              type="text"
              placeholder="What do want to learn?"
            />
            <button>Recherche</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Herolist;
