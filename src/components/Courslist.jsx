import React from 'react';

function Courslist() {
  const cours = [
    {
      id: 1,
      title: 'Introduction à la programmation',
      description: 'Apprenez les bases de la programmation avec Python',
      image: '',
      price: 49.99
    },
    {
      id: 2,
      title: 'Développement web avec React',
      description: 'Créez des applications web modernes avec React et Redux',
      image: '',
      price: 99.99
    },
    {
      id: 3,
      title: 'Création d\'applications mobiles avec React Native',
      description: 'Construisez des applications mobiles natives pour iOS et Android avec React Native',
      image: '',
      price: 149.99
    }
  ];

  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900">Nos cours</h2>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {cours.map((cours) => (
            <div key={cours.id} className="bg-white overflow-hidden shadow rounded-lg">
              <img className="h-48 w-full object-cover" src={cours.image} alt={cours.title} />
              <div className="px-4 py-4">
                <h3 className="text-lg font-medium text-gray-900">{cours.title}</h3>
                <p className="mt-2 text-gray-600">{cours.description}</p>
                <div className="mt-4 flex justify-between items-center">
                  {/* <div className="text-lg font-semibold text-gray-900">${cours.price}</div> */}
                  <button className="px-4 py-2 bg-[#00296b] text-white rounded-md hover:bg-blue-900 ">Suivre</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Courslist;
