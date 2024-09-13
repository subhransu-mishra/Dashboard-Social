import React, { useState } from "react";

const PGEntryForm = () => {
  const [pgName, setPgName] = useState("");
  const [pgLocation, setPgLocation] = useState("");
  const [eligibility, setEligibility] = useState("male");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const pgData = {
      pgName,
      pgLocation,
      eligibility,
      phoneNumber,
      image,
    };
    console.log(pgData);
    // Logic to save or handle the PG data (e.g., API call) goes here
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6 max-w-md w-full"
      >
        <h2 className="text-2xl font-bold mb-4">PG Entry Form</h2>

        {/* PG Name Input */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="pgName">
            PG Name
          </label>
          <input
            type="text"
            id="pgName"
            value={pgName}
            onChange={(e) => setPgName(e.target.value)}
            placeholder="Enter PG name"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
            required
          />
        </div>

        {/* PG Location Input */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="pgLocation">
            PG Location
          </label>
          <input
            type="text"
            id="pgLocation"
            value={pgLocation}
            onChange={(e) => setPgLocation(e.target.value)}
            placeholder="Enter PG location"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
            required
          />
        </div>

        {/* Eligibility Dropdown */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="eligibility">
            Eligibility
          </label>
          <select
            id="eligibility"
            value={eligibility}
            onChange={(e) => setEligibility(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
            required
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="unisex">Unisex</option>
          </select>
        </div>

        {/* Phone Number Input */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="phoneNumber">
            Phone Number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Enter phone number"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
            pattern="[0-9]{10}"
            required
          />
        </div>

        {/* PG Image Upload */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="image">
            Upload PG Image
          </label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Submit PG
          </button>
        </div>
      </form>
    </div>
  );
};

export default PGEntryForm;