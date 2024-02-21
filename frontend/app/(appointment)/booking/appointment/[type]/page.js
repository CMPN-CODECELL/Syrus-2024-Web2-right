// components/AppointmentScheduler.js
"use client";
import React, { useState } from "react";
import { db } from "@/firebase";
import { useUser } from "@clerk/nextjs";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useParams, useRouter } from "next/navigation";

const AppointmentScheduler = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [userName, setUserName] = useState("");
  const [userId, setUserId] = useState("");
  const { user, isLoading } = useUser();
  const router = useRouter();
  const type = useParams();
  const timeSlots = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
  ];

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handleUserIdChange = (e) => {
    setUserId(e.target.value);
  };

  const scheduleAppointment = async () => {
    try {
      const appointmentRef = await addDoc(collection(db, "appointments"), {
        userId: user.id,
        date: selectedDate,
        time: selectedTime,
        name: user.fullName,
        type: type,
        purpose: purpose,
        timestamp: serverTimestamp(),
      });

      console.log("Appointment scheduled with ID: ", appointmentRef.id);
      return appointmentRef.id; // Return the ID of the newly created appointment
    } catch (error) {
      console.error("Error scheduling appointment: ", error);
      throw new Error(
        "Failed to schedule appointment. Please try again later."
      );
    }
  };
  const [purpose, setPurpose] = useState("");

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Appointment Scheduling</h1>
      <div className="">
        <div>
          <label
            htmlFor="date"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Select Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={selectedDate}
            onChange={handleDateChange}
            className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mb-4"
          />
        </div>
        <div>
          <label
            htmlFor="time"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Select Time
          </label>
          <select
            id="time"
            name="time"
            value={selectedTime}
            onChange={handleTimeChange}
            className="mt-1 p-2 block w-full mb-4 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="">Select Time</option>
            {timeSlots.map((slot) => (
              <option key={slot} value={slot}>
                {slot}
              </option>
            ))}
          </select>
          <input
            type="text"
            className="h-14 border-2 text-black border-gray-100 w-full outline-none p-2"
            placeholder="What's the puropse for the appointment?"
            value={purpose}
            onChange={(e) => {
              setPurpose(e.target.value);
            }}
          />
        </div>
      </div>

      <button
        onClick={() => {
          scheduleAppointment();
          router.push("viewappointments");
        }}
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Book Appointment
      </button>
    </div>
  );
};

export default AppointmentScheduler;
