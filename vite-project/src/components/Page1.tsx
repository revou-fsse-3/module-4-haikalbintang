import { useState } from "react";
import Button from "./Button";
import Input from "./Input";

interface Data {
  fullName?: string;
  emailAddress?: string;
  dateOfBirth?: string;
}

const Page1 = () => {
  const [fullName, setFullName] = useState<string>();
  const [emailAddress, setEmailAdress] = useState<string>();
  const [dateOfBirth, setDateOfBirth] = useState<string>();
  const [nextPage, setNextPage] = useState<Data[]>([]);

  const handleNext = () => {
    const obj = {
      fullName: fullName,
      emailAddress: emailAddress,
      dateOfBirth: dateOfBirth,
    };
    console.log(obj);
  };

  return (
    <>
      <h2 className="font-bold text-xl">Personal Information</h2>
      <p>Full Name</p>
      <Input
        variant={"single"}
        type={"text"}
        value={fullName}
        onChange={setFullName}
      />
      <p>Email Address</p>
      <Input
        variant={"single"}
        type={"text"}
        value={emailAddress}
        onChange={setEmailAdress}
      />
      <p>Date of Birth</p>
      <Input
        variant={"single"}
        type={"text"}
        value={dateOfBirth}
        onChange={setDateOfBirth}
      />
      <Button label="Next" handleClick={handleNext} />
    </>
  );
};

export default Page1;
