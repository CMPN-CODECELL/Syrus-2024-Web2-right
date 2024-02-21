// components/ViewAppointmentsPage.js
"use client";
import React, { useState, useEffect } from "react";
import { db } from "@/firebase";
import {
  collection,
  doc,
  orderBy,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { onSnapshot } from "firebase/firestore";

import { useUser } from "@clerk/nextjs";

const ViewAppointmentsPage = () => {
  const { user, isLoaded } = useUser();
  console.log(user?.id);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db, "appointments")),
      (snapshot) => {
        setAppointments(snapshot.docs);
      }
    );
    return () => unsubscribe();
  }, []);

  console.log(appointments);
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">My Appointments</h1>
      <div>
        {appointments.map((appointment) => (
          <div key={appointment?.id} className="border p-4 mb-4 rounded-md">
            <p>Date: {appointment?.data()?.date}</p>
            <p>Time: {appointment?.data()?.time}</p>
            <p>Purpose: {appointment?.data()?.purpose}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewAppointmentsPage;
