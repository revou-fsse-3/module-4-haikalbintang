import { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import Card from "./Card";
import { Formik, Form } from "formik";
import * as yup from "yup";

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

  // const formMik = useFormik({
  //   initialValues: {
  //     fullName: "",
  //     emailAddress: "",
  //     dateOfBirth: "",
  //   },
  //   onSubmit: () => console.log(),
  // });

  return (
    <>
      <Formik
        initialValues={{
          fullName: "",
          emailAddress: "",
          dateOfBirth: "",
        }}
        onSubmit={() => console.log("asdf")}
      >
        <Form>
          <h2 className="font-bold text-xl">Personal Information</h2>
          <div>
            <p>Full Name</p>
            <Input
              variant={"single"}
              type={"text"}
              value={fullName}
              onChange={setFullName}
            />
          </div>
          <div>
            <p>Email Address</p>
            <Input
              variant={"single"}
              type={"text"}
              value={emailAddress}
              onChange={setEmailAdress}
            />
          </div>
          <div>
            <p>Date of Birth</p>
            <Input
              variant={"single"}
              type={"text"}
              value={dateOfBirth}
              onChange={setDateOfBirth}
            />
          </div>

          <Button
            label={"Submit this page"}
            handleClick={handleSubmit}
            disabled={disabled}
          />
        </Form>
      </Formik>
    </>
  );
};

export default Page1;
