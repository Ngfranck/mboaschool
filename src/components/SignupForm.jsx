import React, { useState } from "react";

const SignupForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [interests, setInterests] = useState([]);
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      console.log("Submitted data:", name, email, password, interests);
    }
  };

  const validateForm = () => {
    let isValid = true;
    const errors = {};

    if (!name) {
      errors.name = "Name is required";
      isValid = false;
    }

    if (!email) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      errors.email = "Please enter a valid email address";
      isValid = false;
    }

    if (!password) {
      errors.password = "Password is required";
      isValid = false;
    } else if (password.length < 8) {
      errors.password = "Password must be at least 8 characters long";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handleInterestChange = (event) => {
    const selectedOptions = Array.from(event.target.selectedOptions).map(
      (option) => option.value
    );
    setInterests(selectedOptions);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-gray-800 mb-6">
        Create an Account
      </h2>
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          value={name}

          onChange={(e) => setName(e.target.value)}
          placeholder="John Doe"
          className={`w-full px-4 py-2 shadow appearance-none rounded border-gray-400 focus:shadow-outline focus:border-blue-500 focus:outline-none ${
            errors.name ? "border-red-500" : ""
          }`}
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name}</p>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="johndoe@example.com"
          className={`w-full px-4 py-2 shadow appearance-none rounded focus:shadow-outline border-gray-400 focus:border-blue-500 focus:outline-none ${
            errors.email ? "border-red-500" : ""
          }`}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email}</p>
        )}
      </div>
      <div className="mb-4">
        <label
          htmlFor="password"
          className="block text-gray-700 font-bold mb-2"
        >
          Password
        </label>
        <input
          type="password"
          id={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="********"
          className={`w-full px-4 py-2 shadow appearance-none rounded focus:shadow-outline border-gray-400 focus:border-blue-500 focus:outline-none ${
            errors.password ? "border-red-500" : ""
          }`}
        />
        {errors.password && (
          <p className="text-red-500 text-sm mt-1">{errors.password}</p>
        )}
      </div>
      <div className="mb-4">
        <label
          htmlFor="interests"
          className="block text-gray-700 font-bold mb-2"
        >
          Interests
        </label>
        <select
          multiple
          id="interests"
          value={interests}
          onChange={handleInterestChange}
          className="w-full px-4 py-2 shadow appearance-none rounded focus:shadow-outline border-gray-400 focus:border-blue-500 focus:outline-none"
        >
          <option value="music">Music</option>
          <option value="sports">Sports</option>
          <option value="cooking">Cooking</option>
          <option value="travel">Travel</option>
        </select>
      </div>
      <button
        type="submit"
        className="w-full bg-[#00296b] text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
      >
        Sign Up
      </button>
    </form>
  );
};

export default SignupForm;
