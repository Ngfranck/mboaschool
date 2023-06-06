import React, { useState } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!name) {
      errors.name = 'Veuillez entrer votre nom complet';
      isValid = false;
    }

    if (!email) {
      errors.email = 'Veuillez entrer votre adresse e-mail';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Veuillez entrer une adresse e-mail valide';
      isValid = false;
    }

    if (!message) {
      errors.message = 'Veuillez entrer votre message';
      isValid = false;
    }

    setErrors(errors);

    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      // Ajouter ici la logique pour envoyer le message
    }
  };

  return (
    <section className="py-8 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-[#00296b] text-center mb-4 md:mb-8">Nous Contacter</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Nom complet</label>
            <input type="text" id="name" value={name} onChange={(event) => setName(event.target.value)} className={`w-full px-4 py-2 rounded-lg bg-gray-100 border ${errors.name ? 'border-red-500' : 'border-gray-400'} focus:outline-none focus:border-blue-400`} />
            {errors.name && <p className="text-red-500 mt-1">{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Adresse e-mail</label>
            <input type="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} className={`w-full px-4 py-2 rounded-lg bg-gray-100 border ${errors.email ? 'border-red-500' : 'border-gray-400'} focus:outline-none focus:border-blue-400`} />
            {errors.email && <p className="text-red-500 mt-1">{errors.email}</p>}
          </div>
          <div className="col-span-2">
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
            <textarea id="message" value={message} onChange={(event) => setMessage(event.target.value)} rows="6" className={`w-full px-4 py-2 rounded-lg bg-gray-100 border ${errors.message ? 'border-red-500' : 'border-gray-400'} focus:outline-none focus:border-blue-400`}></textarea>
            {errors.message && <p className="text-red-500 mt-1">{errors.message}</p>}
          </div>
          <div className="col-span-2 text-right">
            <button type="submit" className="bg-[#00296b] hover:bg-blue-600 text-white font-medium px-4 py-2 rounded-lg focus:outline-none focus:shadow-outline-blue">Envoyer</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
