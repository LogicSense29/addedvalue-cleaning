import { X } from "lucide-react";
import React, { useState } from "react";

// import { Loader } from "./Loader";


const steps = [
  "Cleaning Type",
  "Sub Type",
  "Space Size",
  "Extras",
  "Schedule & Contact",
  "",
];

export default function CleaningStepper({setModal}) {
  const [currentStep, setCurrentStep] = useState(0);
  const [cleaningType, setCleaningType] = useState("");
  const [formData, setFormData] = useState({
    cleaningType: "",
    subType: "",
    spaceSize: "",
    extras: "",
    name: "",
    email: "",
    phone: "",
  });

    const [loading, setLoading] = useState(false);
    const [quote, setQuote] = useState(null);
    const [error, setError] = useState(null);



  const progress = ((currentStep + 1) / steps.length) * 100;

  const handleChange = (field, value) => {
    console.log(value)
    setFormData((prev) => ({ ...prev, [field]: value }));
  if (field === "cleaningType") {
    setCleaningType(value);
  }

  };

  const handleGetQuote = async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await fetch("https://addedvalue-b-production.up.railway.app/api/quotation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          // your payload here
   ...formData
        }),
      });

      if (!res.ok) {
        throw new Error(`Request failed with status ${res.status}`);
      }

      const data = await res.json();
      setQuote(data);
    } catch (err) {
      console.error(err);
      setError("Something went wrong, please try again.");
    } finally {
      setLoading(false);
    }
  };

  const nextStep = () =>
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

const handleFlow = async () => {
  if (currentStep === steps.length - 2) {
    console.log(currentStep)
    nextStep();
    await handleGetQuote();
  } else if (currentStep === steps.length - 1) {
        setModal(false)
  } else {
    nextStep();
  }
};


  return (
    <div className='relative max-w-lg mx-auto mt-10 bg-white p-8 rounded-none shadow-sm flex flex-col text-gray-700 rounded-sm'>
      <div
        className='mb-4 flex gap-2 border-2 border-gray-400 items-center  text-gray-800 rounded-[500px] w-fit p-2 hover:bg-gray-100 cursor-pointer self-end'
        onClick={() => setModal(false)}>
        <X size={14} className='' />
        {/* <span>Close</span> */}
      </div>
      {/* Progress Bar */}
      <div className='w-full bg-gray-200 rounded-full h-2 mb-6'>
        <div
          className='bg-primary h-2 rounded-full transition-all duration-500'
          style={{ width: `${progress}%` }}></div>
      </div>

      {/* Step Title */}
      <h2 className='text-xl font-raleway font-semibold mb-4 text-center text-gray-800'>
        {steps[currentStep]}
      </h2>

      {/* Step Content */}
      <div className='min-h-[180px]'>
        {/* Step 1: Cleaning Type */}
        {currentStep === 0 && (
          <div className='space-y-3'>
            {["Commercial", "Residential", "Special", "Airbnb"].map((type) => (
              <label
                key={type}
                className={`flex items-center justify-between border border-gray-300 rounded-lg px-4 py-3 cursor-pointer transition ${
                  formData.cleaningType === type ? " bg-primary/10" : ""
                }`}>
                <span>{type}</span>
                <input
                  type='radio'
                  name='cleaningType'
                  value={type}
                  checked={formData.cleaningType === type}
                  onChange={() => handleChange("cleaningType", type)}
                  className='accent-primary'
                />
              </label>
            ))}
          </div>
        )}

        {currentStep === 1 && (
          <>
            {cleaningType === "Commercial" && (
              <div className='space-y-3'>
                {[
                  "Restroom Sanitation",
                  "Waste Removal",
                  "Retail Spaces",
                  "Warehouses",
                  "School",
                  "Office",
                ].map((type) => (
                  <label
                    key={type}
                    className={`flex items-center justify-between border border-gray-300 rounded-lg px-4 py-3 cursor-pointer transition ${
                      formData.subType === type ? " bg-primary/10" : ""
                    }`}>
                    <span>{type}</span>
                    <input
                      type='radio'
                      name='subType'
                      value={type}
                      checked={formData.subType === type}
                      onChange={() => handleChange("subType", type)}
                      className='accent-primary'
                    />
                  </label>
                ))}
              </div>
            )}

            {cleaningType === "Residential" && (
              <div className='space-y-3'>
                {[
                  "Deep Cleaing",
                  "Regular Cleaning",
                  "End of Tenancy",
                  "Oven Cleaning",
                  "House Cleaning",
                  "Carpet Cleaning",
                ].map((type) => (
                  <label
                    key={type}
                    className={`flex items-center justify-between border border-gray-300 rounded-lg px-4 py-3 cursor-pointer transition ${
                      formData.subType === type ? " bg-primary/10" : ""
                    }`}>
                    <span>{type}</span>
                    <input
                      type='radio'
                      name='subType'
                      value={type}
                      checked={formData.subType === type}
                      onChange={() => handleChange("subType", type)}
                      className='accent-primary'
                    />
                  </label>
                ))}
              </div>
            )}

            {cleaningType === "Special" && (
              <div className='space-y-3'>
                {["Carpet Cleaning", "Window Cleaning", "Post construction Cleanup"].map(
                  (type) => (
                    <label
                      key={type}
                      className={`flex items-center justify-between border border-gray-300 rounded-lg px-4 py-3 cursor-pointer transition ${
                        formData.subType === type ? " bg-primary/10" : ""
                      }`}>
                      <span>{type}</span>
                      <input
                        type='radio'
                        name='subType'
                        value={type}
                        checked={formData.subType === type}
                        onChange={() => handleChange("subType", type)}
                        className='accent-primary'
                      />
                    </label>
                  )
                )}
              </div>
            )}

            {cleaningType === "Airbnb" && (
              <div className='space-y-3'>
                {[
                  "Quick Clean",
                  "Standard Clean",
                  "Toiletries Restock",
                  "Damage Report & Check",
                  "Supervision",
                ].map((type) => (
                  <label
                    key={type}
                    className={`flex items-center justify-between border border-gray-300 rounded-lg px-4 py-3 cursor-pointer transition ${
                      formData.subType === type ? " bg-primary/10" : ""
                    }`}>
                    <span>{type}</span>
                    <input
                      type='radio'
                      name='subType'
                      value={type}
                      checked={formData.subType === type}
                      onChange={() => handleChange("subType", type)}
                      className='accent-primary'
                    />
                  </label>
                ))}
              </div>
            )}
          </>
        )}

        {/* Step 2: Space Size */}
        {currentStep === 2 && (
          <div className='space-y-3'>
            {["Small", "Medium", "Large"].map((size) => (
              <label
                key={size}
                className={`flex items-center justify-between border border-gray-300 rounded-lg px-4 py-3 cursor-pointer transition ${
                  formData.spaceSize === size ? "bg-primary/10" : ""
                }`}>
                <span>{size}</span>
                <input
                  type='radio'
                  name='spaceSize'
                  value={size}
                  checked={formData.spaceSize === size}
                  onChange={() => handleChange("spaceSize", size)}
                  className='accent-primary'
                />
              </label>
            ))}
          </div>
        )}

        {/* Step 3: Extras */}
        {currentStep === 3 && (
          <div className='space-y-3'>
            {[
              "Deep Cleaning",
              "Windows",
              "Laundry",
              "Oven Cleaning",
              "None",
            ].map((extra) => (
              <label
                key={extra}
                className={`flex items-center justify-between border border-gray-300 rounded-lg px-4 py-3 cursor-pointer transition ${
                  formData.extras === extra ? "bg-primary/10" : ""
                }`}>
                <span>{extra}</span>
                <input
                  type='radio'
                  name='extras'
                  value={extra}
                  checked={formData.extras === extra}
                  onChange={() => handleChange("extras", extra)}
                  className='accent-primary'
                />
              </label>
            ))}
          </div>
        )}

        {/* Step 4: Contact Info */}
        {currentStep === 4 && (
          <form className='grid gap-3'>
            <input
              type='text'
              placeholder='Full Name'
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              className='border border-gray-400 p-3 rounded-lg'
            />
            <input
              type='email'
              placeholder='Email'
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className='border border-gray-400 p-3 rounded-lg'
            />
            <input
              type='phone'
              placeholder='Phone'
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              className='border border-gray-400 p-3 rounded-lg'
            />
            {/* <input
              type='date'
              value={formData.date}
              onChange={(e) => handleChange("date", e.target.value)}
              className='border border-gray-400 p-3 rounded-lg'
            /> */}
          </form>
        )}

        {/* Step 5: Review */}
        {/* {currentStep === 5 && (
          <div className='text-gray-700 space-y-3'>
            <p>
              <strong>Cleaning Type:</strong> {formData.cleaningType}
            </p>
            <p>
              <strong>Size:</strong> {formData.spaceSize}
            </p>
            <p>
              <strong>Extras:</strong> {formData.extras}
            </p>
            <p>
              <strong>Phone:</strong> {formData.phone}
            </p>
            <p>
              <strong>Name:</strong> {formData.name}
            </p>
            <p>
              <strong>Email:</strong> {formData.email}
            </p>

            <button className='mt-4 w-full bg-primary text-white py-3 rounded-full'>
              Get Qoute
            </button>
          </div>
        )} */}
        {currentStep === 5 && (
          <div className='flex flex-col items-center text-center space-y-4'>
            {loading ? (
              <p className='text-gray-600 text-lg'>Loading...</p>
            ) : error ? (
              <>
                <img
                  src='/error.gif'
                  alt='Error'
                  className='w-40 h-40 object-contain'
                />
                <p className='text-red-500 text-lg'>
                  Something went wrong. Please try again.
                </p>
              </>
            ) : (
              <>
                <img
                  src='/congratulations.gif'
                  alt='Success'
                  className='w-40 h-40 object-contain'
                />
                <p className='text-green-600 text-lg font-medium'>
                  Check your email for updates
                </p>
              </>
            )}
          </div>
        )}
      </div>

      {/* Navigation Buttons */}
      <div className='flex justify-between mt-6'>
        <button
          onClick={prevStep}
          disabled={currentStep === 0}
          className={`py-2 px-4 rounded-full border ${
            currentStep === 0
              ? "text-gray-400 border-gray-200"
              : "text-gray-700 border-gray-400 hover:bg-gray-100"
          }`}>
          Back
        </button>
        <button
          onClick={handleFlow}
          className='py-2 px-4 rounded-full bg-primary text-white hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed'
          disabled={loading}>
          {loading
            ? "Submitting..."
            : currentStep === steps.length - 1
            ? "Finish"
            : currentStep === steps.length - 2
            ? "Get Quote"
            : "Next"}
        </button>
      </div>
    </div>
  );
}
