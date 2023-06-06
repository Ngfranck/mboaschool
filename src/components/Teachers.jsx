import React from 'react';
import { Images} from "../Constantes";

function Teachers() {
  const teachers = [
    {
      name: 'Nguembu yal',
      image: 'yal.jpg',
      qualifications: 'Diplômé en mathématiques, 5 ans d\'expérience',
      specialties: 'Mathématiques, physique'
    },
    {
      name: 'Ngoka franck',
      image: 'franck.jpg',
      qualifications: 'Diplômée en anglais, 3 ans d\'expérience',
      specialties: 'Anglais, littérature'
    },
    {
      name: 'Talla landry',
      image: 'landry.jpg',
      qualifications: 'Diplômé en informatique, 7 ans d\'expérience',
      specialties: 'Informatique, programmation'
    }
  ];

  return (
    <section className="py-8 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-[#00296b]  text-center mb-4 md:mb-8">Nos mellieur tuteur</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          {teachers.map((teacher) => (
            <div key={teacher.name} className="flex flex-col items-center">
              <img src={teacher.image} alt={teacher.name} className="h-12 md:h-24 w-12 md:w-24 rounded-full mb-2 md:mb-4"/>
              <h3 className="text-lg md:text-xl font-medium text-gray-900 mb-1 md:mb-2">{teacher.name}</h3>
              <p className="text-gray-500 text-center text-sm md:text-base">{teacher.qualifications}</p>
              <p className="text-gray-500 text-center text-sm md:text-base">{teacher.specialties}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Teachers;
