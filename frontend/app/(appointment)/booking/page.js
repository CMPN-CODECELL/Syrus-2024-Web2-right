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
        "https://t3.ftcdn.net/jpg/00/82/53/98/360_F_82539877_3wxKa0HbS0Ci9eJrv8mGKqA8PzXGm5Ff.jpg",
    },
    {
      type: "Diet",
      image:
        "https://media.istockphoto.com/id/138205019/photo/happy-healthcare-practitioner.jpg?s=612x612&w=0&k=20&c=b8kUyVtmZeW8MeLHcDsJfqqF0XiFBjq6tgBQZC7G0f0=",
    },
  ]);

  const handleSelectType = (type) => {
    router.push(`/booking/appointment/${type}`);
  };

  return (
    <div className="container mx-auto px-4 py-8 ">
      <h1 className="text-5xl font-bold text-center text-[#4CAF50] mb-8">
        Book an Appointment
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center ml-3">
        {doctorTypes.map((doctor) => (
          <div
            key={doctor.type}
            className="group bg-white shadow-md rounded-lg overflow-hidden cursor-pointer hover:scale-[1.05] hover:shadow-lg"
          >
            <img
              src={doctor.image}
              alt={doctor.type}
              className="w-full  rounded-full h-80  object-center transition duration-200 group-hover:grayscale-0 mb-4"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2 text-[#333333]">
                {doctor.type} Expert
              </h2>
              <button
                onClick={() => handleSelectType(doctor.type)}
                className="bg-[#4CAF50] text-white font-bold py-2 px-4 rounded w-full transition duration-200 hover:bg-[#4CAF50]/80"
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
