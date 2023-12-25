import { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import Card from "./Card";

interface Data {
  fullName?: string;
  emailAddress?: string;
  dateOfBirth?: string;
}

const Page1 = () => {
  const [fullName, setFullName] = useState<string>();
  const [emailAddress, setEmailAdress] = useState<string>();
  const [dateOfBirth, setDateOfBirth] = useState<string>();
  const [savedData, setSavedData] = useState<Data[]>([]);

  const handleSubmit = () => {
    const obj = {
      fullName: fullName,
      emailAddress: emailAddress,
      dateOfBirth: dateOfBirth,
    };

    setFullName("");
    setEmailAdress("");
    setDateOfBirth("");
    setSavedData([...savedData, obj]);
    console.log(obj);
  };

  const disabled = !fullName || !emailAddress || !dateOfBirth;

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
      <Card>
        <Button
          label={"Submit this page"}
          handleClick={handleSubmit}
          disabled={disabled}
        />
      </Card>
    </>
  );
};

export default Page1;
