import React from "react";

const stepsData = [
  {
    number: 1,
    title: "Sign up",
    description: "to create your tutor profile",
    isActive: true, // Indicates the active step for styling
  },
  {
    number: 2,
    title: "Get approved",
    description: "by our team in Five Working days",
    isActive: false,
  },
  {
    number: 3,
    title: "Start earning",
    description: "by teaching students all over the world!",
    isActive: false,
  },
];

const StepSection = () => {
  return (
    <div className="flex flex-col w-full max-w-4xl mx-auto lg:my-10">
      {/* Numbers and Lines */}
      <div className="hidden md:flex items-center w-[70%] mx-3 lg:mx-0">
        {stepsData.map((step, index) => (
          <React.Fragment key={step.number}>
            {/* Step Circle */}
            <div
              className={`flex items-center justify-center w-10 h-10 text-lg font-bold rounded ${
                step.isActive
                  ? "bg-[#158f78] text-white"
                  : "bg-gray-200 text-gray-900"
              }`}
            >
              {step.number}
            </div>

            {/* Connecting Line */}
            {index < stepsData.length - 1 && (
              <div className="flex-1 h-0.5 bg-gray-300"></div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Responsive Vertical Layout for Small Screens */}
      <div className="md:hidden flex flex-col items-start w-full px-3">
        {stepsData.map((step, index) => (
          <React.Fragment key={step.number}>
            {/* Step Circle */}
            <div className="flex items-center gap-4">
              <div
                className={`flex items-center justify-center w-10 h-10 text-lg font-bold rounded ${
                  step.isActive
                    ? "bg-black text-white"
                    : "bg-gray-200 text-gray-900"
                }`}
              >
                {step.number}
              </div>
              {/* Text Content */}
              <div className="text-left">
                <h3 className="text-xl font-semibold text-black">
                  {step.title}
                </h3>
                <p className="mt-1 text-sm text-gray-900">{step.description}</p>
              </div>
            </div>

            {/* Connecting Line */}
            {index < stepsData.length - 1 && (
              <div className=" mx-5 h-8 w-0.5 bg-gray-300"></div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Horizontal Text Content for Large Screens */}
      <div className="hidden md:flex justify-between w-[94%] mt-6">
        {stepsData.map((step) => (
          <div key={step.number} className="flex flex-col text-start px-3 lg:px-0">
            <h3 className="text-2xl font-semibold text-black">
              {step.title}
            </h3>
            <p className="mt-1 text-sm text-[#222]">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepSection;
