import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

interface FormValues {
  firstName: string;
  email: string;
  dob: string;
}

interface Page1Props {
  onSubmit: (values: FormValues) => void; // Updated onSubmit type
}

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  dob: Yup.date().required("Date of Birth is required"),
});

const initialValues: FormValues = {
  firstName: "",
  email: "",
  dob: "",
};

const Page1Clone21: React.FC<Page1Props> = ({ onSubmit }) => {
  return (
    <div className="max-w-md mx-auto mt-8">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          onSubmit(values);
        }}
      >
        <Form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <h2>Personal Information</h2>
            <label
              htmlFor="firstName"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              First Name
            </label>
            <Field
              type="text"
              id="firstName"
              name="firstName"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your first name"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email Address
            </label>
            <Field
              type="email"
              id="email"
              name="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your email address"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="dob"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Date of Birth
            </label>
            <Field
              type="date"
              id="dob"
              name="dob"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Select your date of birth"
            />
          </div>
        </Form>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Next
        </button>
      </Formik>
    </div>
  );
};

export default Page1Clone21;
