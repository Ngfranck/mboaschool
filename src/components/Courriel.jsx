
import React from "react";
import { useState } from 'react';
import emailjs from 'emailjs-com';

export default function Courriel({ onClose }) {
  const [to, setTo] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Votre code d'authentification EmailJS
    const SERVICE_ID = 'your_service_id';
    const TEMPLATE_ID = 'your_template_id';
    const USER_ID = 'your_user_id';

    emailjs.send(SERVICE_ID, TEMPLATE_ID, {
      to,
      subject,
      message,
    }, USER_ID)
      .then(() => alert('Le courriel a été envoyé avec succès!'))
      .catch((error) => console.error(`Erreur lors de l'envoi du courriel: ${error}`));

    setTo('');
    setSubject('');
    setMessage('');
  };
  
  return (
    <div className="fixed top-0 w-screen flex items-center justify-center h-screen bg-gray-900/30 backdrop-blur ">
      <div className="bg-white rounded  w-full md:w-1/2 lg:w-1/3 bg-white rounded-lg shadow-lg p-6 ">
        <div className="w-full h-[8vh] grid justify-items-end">
          <button
            className="grid flex items-center justify-center mx-50 rounded-full  text-[#00296b] w-9 h-9"
            onClick={onClose}
          >
            X
          </button>
        </div>
        <form onSubmit={handleSubmit} className="px-4 py-6 sm:p-10  rounded-lg">
      <div className="mb-6">
        <label htmlFor="to" className="block mb-2 font-medium text-gray-700">
          À:
        </label>
        <input
          type="email"
          name="to"
          id="to"
          value={to}
          onChange={(event) => setTo(event.target.value)}
          placeholder="example@example.com"
          required
          className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="subject" className="block mb-2 font-medium text-gray-700">
          Sujet:
        </label>
        <input
          type="text"
          name="subject"
          id="subject"
          value={subject}
          onChange={(event) => setSubject(event.target.value)}
          placeholder="Entrez le sujet ici"
          required
          className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="message" className="block mb-2 font-medium text-gray-700">
          Message:
        </label>
        <textarea
          name="message"
          id="message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="Entrez votre message ici"
          required
          rows="4"
          className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-[#00296b] text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300"
      >
        Envoyer
      </button>
    </form>
      </div>
    </div>
  );
}
