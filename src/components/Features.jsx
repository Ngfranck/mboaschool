import React from 'react';
import { Images } from "../Constantes";


function Features() {
  return (
    <section className="bg-grey-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#00296b] text-center mb-8">Fonctionnalités clés</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center">
            <img src={Images.calandar} alt="Calendrier" className="h-16 w-16 mb-4"/>
            <h3 className="text-xl font-medium text-gray-900 mb-2">Planifiez des sessions de tutorat</h3>
            <p className="text-gray-500 text-center">Utilisez notre calendrier pour planifier des sessions de tutorat en ligne avec vos enseignants préférés.</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={Images.messagerie} alt="Messagerie" className="h-16 w-16 mb-4"/>
            <h3 className="text-xl font-medium text-gray-900 mb-2">Communiquez facilement</h3>
            <p className="text-gray-500 text-center">Notre système de messagerie intégré vous permet de communiquer facilement avec vos enseignants avant, pendant et après les sessions de tutorat.</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={Images.partage} alt="Partage d'écran" className="h-16 w-16 mb-4"/>
            <h3 className="text-xl font-medium text-gray-900 mb-2">Partagez votre écran</h3>
            <p className="text-gray-500 text-center">Partagez votre écran avec vos enseignants pour une expérience de tutorat en ligne plus immersive et interactive.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
