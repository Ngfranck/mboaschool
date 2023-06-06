import React from 'react';

function Footer() {
  return (
    <footer className="bg-[#00296b] text-white py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
          <div>
            <h3 className="text-lg md:text-xl font-medium mb-2">À propos de nous</h3>
            <p className="text-sm md:text-base">Nous sommes une entreprise spécialisée dans la conception et le développement de sites web et d'applications mobiles.</p>
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-medium mb-2">Liens utiles</h3>
            <ul className="text-sm md:text-base">
              <li><a href="#">Accueil</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Projets</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Nous contacter</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-medium mb-2">Nous suivre</h3>
            <ul className="text-sm md:text-base">
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">LinkedIn</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">GitHub</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 md:mt-12 text-center text-sm md:text-base">
          <p>&copy; 2023 Nom de l'entreprise. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
