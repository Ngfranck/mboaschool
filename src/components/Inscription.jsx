
// import React from "react";
import React, { useState } from "react";
// import {ResetPassword} from '../components';

export default function Inscription({ onClose }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!username) {
      errors.username = "Veuillez entrer votre e-mail";
      isValid = false;
    }

    if (!password) {
      errors.password = "Veuillez entrer votre mot de passe";
      isValid = false;
    }

    if (!confirmPassword) {
      errors.confirmPassword = "comfirmer votre mot de passe";
      isValid = false;
    }

    setErrors(errors);

    return isValid;
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      // Ajouter ici la logique pour soumettre les données du formulaire
    }
  };

  return (
    <div className="fixed top-0 w-screen flex items-center justify-center h-screen bg-gray-900/30 backdrop-blur ">
      <div className="bg-white rounded h-[9 0vh] w-1/3 ">
        <div className="w-full h-[8vh] grid justify-items-end">
          <button
            className="grid flex items-center justify-center mx-50 text-[#00296b] w-9 h-9"
            onClick={onClose}
          >
            X
          </button>
        </div>
        <form className="max-w-lg mx-auto  rounded px-8 pt-6 pb-8 mb-4 sm:grid sm:grid-cols-2 sm:gap-6">
          <div className="mb-4 sm:col-span-2">
            <label
              className="block text-gray-700 grid justify-items-start font-bold mb-2"
              htmlFor="username"
            >
              E-mail
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.username ? "border-red-500" : ""
              }`}
              id="username"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
            {errors.username && (
              <p className="text-red-500 mt-1">{errors.username}</p>
            )}
          </div>
          <div className="mb-6 sm:col-span-2">
            <label
              className="block text-gray-700 grid justify-items-start font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
              onChange={(event) => setPassword(event.target.value)}
            />
            {errors.password && (
              <p className="text-red-500 mt-1">{errors.password}</p>
            )}
          </div>
          <div className="mb-6 sm:col-span-2">
            <label
              className="block text-gray-700 grid justify-items-start font-bold mb-2"
              htmlFor="password"
            >
              Comfirm Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
              onChange={(event) => setconfirmPassword(event.target.value)}
            />
            {errors.password && (
              <p className="text-red-500 mt-1">{errors.password}</p>
            )}
          </div>
          <div className="flex items-center justify-between sm:col-span-2">
            <button
              className="bg-[#00296b] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline sm:w-full"
              type="button"
              onClick={handleSubmit}
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}