import React, { useState } from "react";

const JobEntryForm = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [jobLocation, setJobLocation] = useState("");
  const [eligibility, setEligibility] = useState("");
  const [applyLink, setApplyLink] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const jobData = {
      jobTitle,
      jobLocation,
      eligibility,
      applyLink,
    };
    console.log(jobData);
    // You can add your logic here to store the job data or make an API call
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6 max-w-md w-full"
      >
        <h2 className="text-2xl font-bold mb-4">Job Entry Form</h2>

        {/* Job Title Input */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="jobTitle">
            Job Title
          </label>
          <input
            type="text"
            id="jobTitle"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            placeholder="Enter job title"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
            required
          />
        </div>

        {/* Job Location Input */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="jobLocation">
            Job Location
          </label>
          <input
            type="text"
            id="jobLocation"
            value={jobLocation}
            onChange={(e) => setJobLocation(e.target.value)}
            placeholder="Enter job location"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
            required
          />
        </div>

        {/* Eligibility Input */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="eligibility">
            Eligibility
          </label>
          <input
            type="text"
            id="eligibility"
            value={eligibility}
            onChange={(e) => setEligibility(e.target.value)}
            placeholder="Enter eligibility criteria"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
            required
          />
        </div>

        {/* Apply Link Input */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="applyLink">
            Apply Link
          </label>
          <input
            type="url"
            id="applyLink"
            value={applyLink}
            onChange={(e) => setApplyLink(e.target.value)}
            placeholder="Enter apply link"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Submit Job
          </button>
        </div>
      </form>
    </div>
  );
};

export default JobEntryForm;
