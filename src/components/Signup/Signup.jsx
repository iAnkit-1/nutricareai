import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaLock, FaEye, FaWeightHanging, FaMale, FaFemale, FaAccessibleIcon } from 'react-icons/fa';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    age: '',
    gender: '',
    weight: '',
    height: '',
    dietaryPreferences: '',
    healthGoals: '',
    isDiabetic: false, // For diabetic check
  });

  const [showPassword, setShowPassword] = useState(false);  // For showing/hiding password
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // For showing/hiding confirm password

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prevData) => ({
        ...prevData,
        [name]: checked,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
    // Submit form data logic here (e.g., call an API to register the user)
    console.log('Form submitted', formData);
  };

  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white py-16">
      <div className="max-w-lg mx-auto px-6">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-100">Create Your Account</h1>
        <p className="text-lg text-center mb-8 leading-relaxed max-w-xl mx-auto opacity-80">
          Sign up to get personalized nutritional insights and track your health journey with Nutricare AI.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-lg font-medium text-white">Full Name</label>
            <div className="relative">
              <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full pl-10 py-3 bg-gray-800 text-white border border-gray-700 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-lg font-medium text-white">Email Address</label>
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full pl-10 py-3 bg-gray-800 text-white border border-gray-700 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-lg font-medium text-white">Password</label>
            <div className="relative">
              <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Create a Password"
                className="w-full pl-10 py-3 bg-gray-800 text-white border border-gray-700 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              >
                {showPassword ? <FaEye /> : <FaEye />}
              </button>
            </div>
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-lg font-medium text-white">Confirm Password</label>
            <div className="relative">
              <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm Your Password"
                className="w-full pl-10 py-3 bg-gray-800 text-white border border-gray-700 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              >
                {showConfirmPassword ? <FaEye /> : <FaEye />}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="age" className="block text-lg font-medium text-white">Age</label>
              <div className="relative">
                <FaAccessibleIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="number"
                  id="age"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  placeholder="Your Age"
                  className="w-full pl-10 py-3 bg-gray-800 text-white border border-gray-700 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="gender" className="block text-lg font-medium text-white">Gender</label>
              <div className="relative">
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full pl-10 py-3 bg-gray-800 text-white border border-gray-700 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="weight" className="block text-lg font-medium text-white">Weight (kg)</label>
              <div className="relative">
                <FaWeightHanging className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="number"
                  id="weight"
                  name="weight"
                  value={formData.weight}
                  onChange={handleChange}
                  placeholder="Your Weight"
                  className="w-full pl-10 py-3 bg-gray-800 text-white border border-gray-700 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="height" className="block text-lg font-medium text-white">Height (cm)</label>
              <div className="relative">
                <FaWeightHanging className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="number"
                  id="height"
                  name="height"
                  value={formData.height}
                  onChange={handleChange}
                  placeholder="Your Height"
                  className="w-full pl-10 py-3 bg-gray-800 text-white border border-gray-700 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="dietaryPreferences" className="block text-lg font-medium text-white">Dietary Preferences</label>
            <textarea
              id="dietaryPreferences"
              name="dietaryPreferences"
              value={formData.dietaryPreferences}
              onChange={handleChange}
              placeholder="Any dietary preferences?"
              rows="4"
              className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white font-semibold text-lg rounded-lg mt-6 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
