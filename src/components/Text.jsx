import React, { useState } from 'react';

function Titre() {
  const [text, setText] = useState('');

  const handleAddText = () => {
    setText('Titre\n\nParagraphe');
  };

  return (
    <div className="p-4">
      <button className="bg-[#00296b] hover:bg-blue-800 text-white font-bold py-2 px-4 rounded" onClick={handleAddText}>
        Ajouter du texte
      </button>
      <div className="mt-4">
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Titre;
