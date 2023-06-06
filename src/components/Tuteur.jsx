import React, { useState } from 'react';

const TutorRequestForm = () => {
  const [studentName, setStudentName] = useState('');
  const [gender, setGender] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [tutorType, setTutorType] = useState('');
  const [tutorSubject, setTutorSubject] = useState('');
  const [classLevel, setClassLevel] = useState('');
  const [parentName, setParentName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [requestDetails, setRequestDetails] = useState('');
  

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label htmlFor="studentName" className="block text-gray-700 font-bold mb-2">Nom de l'étudiant:</label>
        <input type="text" id="studentName" value={studentName} onChange={(event) => setStudentName(event.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
      </div>

      <div className="mb-4">
        <label htmlFor="gender" className="block text-gray-700 font-bold mb-2">Sexe:</label>
        <select id="gender" value={gender} onChange={(event) => setGender(event.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
          <option value="male">Masculin</option>
          <option value="female">Féminin</option>
          <option value="other">Autre</option>
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="birthdate" className="block text-gray-700 font-bold mb-2">Date de naissance:</label>
        <input type="date" id="birthdate" value={birthdate} onChange={(event) => setBirthdate(event.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
      </div>

      <div className="mb-4">
        <label htmlFor="tutorType" className="block text-gray-700 font-bold mb-2">Type de tutorat:</label>
        <select id="tutorType" value={tutorType} onChange={(event) => setTutorType(event.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
          <option value="online">En ligne</option>
          <option value="inPerson">En personne</option>
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="tutorSubject" className="block text-gray-700 font-bold mb-2">Sujet du tutorat:</label>
        <input type="text" id="tutorSubject" value={tutorSubject} onChange={(event) => setTutorSubject(event.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
      </div>

      <div className="mb-4">
        <label htmlFor="classLevel" className="block text-gray-700 font-bold mb-2">Classe:</label>
        <input type="text" id="classLevel" value={classLevel} onChange={(event) => setClassLevel(event.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
      </div>

      <div className="mb-4">
        <label htmlFor="parentName" className="block text-gray-700 font-bold mb-2">Nom du parent:</label>
        <input type="text" id="parentName" value={parentName} onChange={(event) => setParentName(event.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email:</label>
        <input type="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
      </div>

      <div className="mb-4">
        <label htmlFor="phoneNumber" className="block text-gray-700 font-bold mb-2">Numéro de téléphone:</label>
        <input type="tel" id="phoneNumber" value={phoneNumber} onChange={(event) => setPhoneNumber(event.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
      </div>

      <div className="mb-4">
        <label htmlFor="requestDetails" className="block text-gray-700 font-bold mb-2">Détails de la requête:</label>
        <textarea id="requestDetails" value={requestDetails} onChange={(event) => setRequestDetails(event.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
      </div>

      <div className="flex items-center justify-between">
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Envoyer
        </button>
      </div>
    </form>
  );
};

export default TutorRequestForm;

