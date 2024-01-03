import React, { useState } from "react";
import Page2Clone2 from "./components/Page2Clone2";
import Page3Clone2 from "./components/Page3Clone2";
import Page1Clone2 from "./components/Page1Clone2";

const FormContainerClone2: React.FC = () => {
  const [step, setStep] = useState(2);

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = (values: any) => {
    // Handle the final form submission logic here
    console.log(values);
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      {step === 1 && <Page1Clone2 onSubmit={nextStep} />}

      {step === 2 && <Page2Clone2 onSubmit={nextStep} onPrevStep={prevStep} />}

      {step === 3 && (
        <Page3Clone2 onSubmit={handleSubmit} onPrevStep={prevStep} />
      )}
    </div>
  );
};

export default FormContainerClone2;
