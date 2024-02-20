
// pages/DailyTracking.js
"use client"
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';


const DailyTracking = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    waterIntake: '',
    calorieCount: '',
    stepsWalked: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    if (!formSubmitted) {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    }

    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add your logic for form submission or data handling here
    console.log('Form Data:', formData);

    const currentDate = new Date();
    const timestamp = currentDate.getTime();
    localStorage.setItem('formData', JSON.stringify({ data: formData, timestamp }));

    // Display messages based on water intake
    const waterIntake = parseFloat(formData.waterIntake);
    let message = '';

    if (waterIntake >= 0 && waterIntake < 2) {
      message = 'Increase your water intake.';
    } else if (waterIntake >= 2 && waterIntake < 3) {
      message = 'Add one more liter, please.';
    } else if (waterIntake >= 3) {
      message = 'Good water intake!';
    }

    const stepsWalked = parseFloat(formData.stepsWalked);
    let message2 = '';

    if (stepsWalked >= 0 && stepsWalked < 2500) {
      message2 = 'Your lifestyle is sedentary.';
    } else if (stepsWalked >= 2500 && stepsWalked < 6500) {
      message2 = 'Increase your activity a little.';
    } else if (stepsWalked >= 6500) {
      message2 = 'Good Going!';
    }

    // Set the formSubmitted state to true
    setFormSubmitted(true);

    console.log('Message:', message2);

    router.push('/thank-you');

    // You can send the data to a backend server or perform other actions
  };

  useEffect(() => {
    // Check local storage for existing form data
    const storedData = localStorage.getItem('formData');

    if (storedData) {
      const { data, timestamp } = JSON.parse(storedData);
      const currentDate = new Date();
      const currentDay = currentDate.getDate();

      const storedDate = new Date(timestamp);
      const storedDay = storedDate.getDate();

      // Reset the form if it's a new day
      if (currentDay !== storedDay) {
        setFormData(initialFormData);
      } else {
        // Populate the form with stored data
        setFormData(data);
      }
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-semibold mb-4 text-blue-600">Daily Tracking</h1>
        <form onSubmit={handleSubmit}>
          {/* ... (existing form fields) */}
          <div className="mb-4">
            <label htmlFor="waterIntake" className="block text-sm font-medium text-gray-600">
              Water Intake (ml)
            </label>
            <input
              type="number"
              id="waterIntake"
              name="waterIntake"
              value={formData.waterIntake}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          {/* Display message based on water intake */}
          {formData.waterIntake && (
            <p className="text-sm text-gray-600 mb-4">
              {formData.waterIntake >= 0 && formData.waterIntake < 2
                ? 'Increase your water intake.'
                : formData.waterIntake >= 2 && formData.waterIntake < 3
                ? 'Add one more liter, please.'
                : 'Good water intake!'}
            </p>

          )}

          <div className="mb-4">
            <label htmlFor="calorieCount" className="block text-sm font-medium text-gray-600">
              Calorie Count
            </label>
            <input
              type="number"
              id="calorieCount"
              name="calorieCount"
              value={formData.calorieCount}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="stepsWalked" className="block text-sm font-medium text-gray-600">
              Steps Walked
            </label>
            <input
              type="number"
              id="stepsWalked"
              name="stepsWalked"
              value={formData.stepsWalked}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          {formData.stepsWalked && (
            <p className="text-sm text-gray-600 mb-4">
              {formData.stepsWalked >= 0 && formData.stepsWalked < 2500
                ? 'Your lifestyle is sedentary.'
                : formData.stepsWalked >= 2500 && formData.stepsWalked < 5000
                ? 'Increase your activity a little.'
                : 'Good Going!'}
            </p>

          )}

          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default DailyTracking;
