import React from 'react'
import TutorsGrid from '../components/TutorsGrid';

export function Tuteurs() {
  

  return (
    <>
    <div className="bg-gray-800 mb-[30px] mx-auto py-24 px-4 sm:px-6 lg:px-8 flex flex-col justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-[#FFF] sm:text-4xl">
            Trouver Nos Tuteur ou Que Vous-etes
          </h2>
          <p className="mt-2 text-sm text-gray-100 sm:text-base">
          Chez nous, nous sommes fiers de proposer les meilleurs tuteurs pour aider les étudiants à réussir. Nous sommes convaincus que vous trouverez le tuteur parfait pour vous aider à atteindre vos objectifs académiques et professionnels.
          </p>
        </div>
      
      </div>
    </div>
     <TutorsGrid/>
    </>
  )
}
export default Tuteurs;