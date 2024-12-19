import React, { useState } from "react";
import { FaGraduationCap, FaBriefcase, FaHospital, FaCalendarAlt } from "react-icons/fa";
import Modal from "../Modal/Modal";

const professionals = [
    {
      id: 1,
      name: "Dr. Sadhna Pushpjivi",
      education: "MBBS, MD (Nutrition)",
      designation: "Senior Nutritionist",
      institute: "AIIMS, New Delhi",
      image: "https://randomuser.me/api/portraits/women/39.jpg", // Replace with actual image
    },
    {
      id: 2,
      name: "Dr. Saurabh Pushpraj",
      education: "PhD in Dietetics",
      designation: "Clinical Dietitian",
      institute: "Fortis Hospital, Mumbai",
      image: "https://randomuser.me/api/portraits/men/45.jpg", // Replace with actual image
    },
    {
      id: 3,
      name: "Dr. Anukriti Saini",
      education: "MBBS, MD (Nutrition)",
      designation: "Junior Nutritionist",
      institute: "Apollo Hospitals, Bangalore",
      image: "https://randomuser.me/api/portraits/women/68.jpg", // Replace with actual image
    },
    {
      id: 4,
      name: "Dr. Rajesh Gupta",
      education: "BSc, MSc (Food Science)",
      designation: "Dietary Consultant",
      institute: "Max Healthcare, Pune",
      image: "https://randomuser.me/api/portraits/men/32.jpg", // Replace with actual image
    },
    {
      id: 5,
      name: "Dr. Kavita Nair",
      education: "MBBS, MD (Dietetics)",
      designation: "Nutrition Advisor",
      institute: "Manipal Hospital, Hyderabad",
      image: "https://randomuser.me/api/portraits/women/47.jpg", // Replace with actual image
    },
    {
      id: 6,
      name: "Dr. Arun Chatterjee",
      education: "PhD in Clinical Nutrition",
      designation: "Senior Dietitian",
      institute: "Columbia Asia Hospital, Kolkata",
      image: "https://randomuser.me/api/portraits/men/58.jpg", // Replace with actual image
    },
    {
      id: 7,
      name: "Dr. Pooja Bansal",
      education: "BSc, MSc (Food Technology)",
      designation: "Nutrition Specialist",
      institute: "Ruby Hall Clinic, Pune",
      image: "https://randomuser.me/api/portraits/women/12.jpg", // Replace with actual image
    },
    {
      id: 8,
      name: "Dr. Anil Mehta",
      education: "MBBS, MD (Nutrition)",
      designation: "Chief Nutritionist",
      institute: "Medanta, Gurgaon",
      image: "https://randomuser.me/api/portraits/men/63.jpg", // Replace with actual image
    },
    {
      id: 9,
      name: "Dr. Nisha Agarwal",
      education: "BSc, MSc (Food Science)",
      designation: "Dietary Consultant",
      institute: "Hiranandani Hospital, Mumbai",
      image: "https://randomuser.me/api/portraits/women/50.jpg", // Replace with actual image
    },
  ];

const Connect = () => {
  const [selectedProfessional, setSelectedProfessional] = useState(null);

  const handleBookAppointment = (professional) => {
    setSelectedProfessional(professional);
  };

  const closeModal = () => {
    setSelectedProfessional(null);
  };

  return (
    <div className="bg-gray-100 py-8 px-4 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Connect with Professionals
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {professionals.map((professional) => (
          <div
            key={professional.id}
            className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center"
          >
            <img
              src={professional.image}
              alt={professional.name}
              className="w-24 h-24 rounded-full mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {professional.name}
            </h2>
            <p className="text-gray-600 flex items-center mb-1">
              <FaGraduationCap className="mr-2 text-blue-500" />
              {professional.education}
            </p>
            <p className="text-gray-600 flex items-center mb-1">
              <FaBriefcase className="mr-2 text-green-500" />
              {professional.designation}
            </p>
            <p className="text-gray-600 flex items-center mb-4">
              <FaHospital className="mr-2 text-red-500" />
              {professional.institute}
            </p>

            <button
              onClick={() => handleBookAppointment(professional)}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-600"
            >
              <FaCalendarAlt className="mr-2" /> Book Appointment
            </button>
          </div>
        ))}
      </div>

      {selectedProfessional && (
        <Modal professional={selectedProfessional} onClose={closeModal} />
      )}
    </div>
  );
};

export default Connect;
