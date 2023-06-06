import React from 'react';
import {Images} from '../Constantes'

function Testimonials() {
  const testimonials = [
    {
      name: 'John Doe',
      title: 'Développeur Web',
      image: 'testimonial1.jpg',
      quote: 'J\'ai suivi plusieurs cours en ligne, mais celui-ci est de loin le meilleur. Les instructeurs sont très compétents et les cours sont bien structurés. Je recommande fortement cette plateforme d\'apprentissage.'
    },
    {
      name: 'Jane Smith',
      title: 'Designer Graphique',
      image: 'testimonial2.jpg',
      quote: 'J\'ai été impressionnée par la qualité des cours et des instructeurs sur cette plateforme. J\'ai appris beaucoup de nouvelles compétences qui m\'ont aidé à avancer dans ma carrière. Merci pour cette expérience formidable!'
    },
    {
      name: 'Bob Johnson',
      title: 'Analyste de Données',
      image: 'franck.jpg',
      quote: 'Je cherchais depuis longtemps une plateforme d\'apprentissage en ligne qui offre des cours de haute qualité à un prix abordable. J\'ai trouvé tout cela et plus encore sur cette plateforme. Je suis très satisfait de mon expérience d\'apprentissage jusqu\'à présent.'
    }
  ];

  return (
    <section className="py-8 md:py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-[#00296b] text-center mb-4 md:mb-8">Témoignages</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col items-center p-4">
              <img src={Images.landry} alt={testimonial.name} className="h-32 w-32 rounded-full mb-4"/>
              <h3 className="text-lg font-medium text-gray-900 mb-2">{testimonial.name}</h3>
              <p className="text-gray-500 text-sm mb-2">{testimonial.title}</p>
              <p className="text-gray-700 text-center">{testimonial.quote}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
