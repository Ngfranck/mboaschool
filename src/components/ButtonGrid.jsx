import React from "react";

const ButtonGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
        Bouton 1
      </button>
      <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
        Bouton 2
      </button>
      <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
        Bouton 3
      </button>
      <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">
        Bouton 4
      </button>
    </div>
  );
};

export default ButtonGrid;
