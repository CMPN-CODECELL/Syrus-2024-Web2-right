"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

function Booking() {
  const router = useRouter();
  const [doctorTypes, setDoctorTypes] = useState([
    {
      type: "Mental Health",
      image:
        "https://img.freepik.com/free-photo/doctor-smiling-with-stethoscope_1154-36.jpg",
    },
    {
      type: "Fitness",
      image:
        "https://img.freepik.com/free-photo/doctor-smiling-with-stethoscope_1154-36.jpg",
    },
    {
      type: "Diet",
      image:
        "https://img.freepik.com/free-photo/doctor-smiling-with-stethoscope_1154-36.jpg",
    },
  ]);

  const handleSelectType = (type) => {
    router.push(`/booking/appointment`);
  };

  return (
    <div className="container mx-auto px-4 py-8 ">
      <h1 className="text-5xl font-bold text-center mb-4 text-green-500 mb-12">
        Book an Appointment
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-center h-[450px]">
        {doctorTypes.map((doctor) => (
          <div
            key={doctor.type}
            className="group bg-white shadow-md rounded-lg overflow-hidden cursor-pointer"
          >
            <img
              src={doctor.image}
              alt={doctor.type}
              className="w-full  rounded-full h-80  object-center transition duration-200 group-hover:grayscale-0"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2 text-gray-900">
                {doctor.type} Expert
              </h2>
              <button
                onClick={() => handleSelectType(doctor.type)}
                className="bg-blue-500 text-white font-bold py-2 px-4 rounded w-full transition duration-200 hover:bg-blue-700"
              >
                Book Appointment
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Booking;
