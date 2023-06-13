import React from "react";

const Profile = ({ name, email, picture }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col sm:flex-row">
      {/* Photo */}
      <div className="p-6">
        <img src={picture} alt={`Photo de ${name}`} className="rounded-full w-24 h-24" />
      </div>

      {/* Informations */}
      <div className="p-6 flex-grow flex flex-col justify-center items-center sm:items-start">
        <h2 className="text-xl font-bold mb-2">{name}</h2>
        <p className="text-gray-600 mb-4">{email}</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Envoyer un message
        </button>
      </div>
    </div>
  );
};

export default Profile;
