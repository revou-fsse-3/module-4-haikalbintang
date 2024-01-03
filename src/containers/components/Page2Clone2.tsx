import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

// Define the form values with types
interface FormValues {
  streetAddress: string;
  city: string;
  state: string;
  zipCode: string;
  onSubmit?: () => void;
}

// Validation schema using Yup
const validationSchema = Yup.object().shape({
  streetAddress: Yup.string().required("Street Address is required"),
  city: Yup.string().required("City is required"),
  state: Yup.string().required("State is required"),
  zipCode: Yup.string().required("Zip Code is required"),
});

const initialValues: FormValues = {
  streetAddress: "",
  city: "",
  state: "",
  zipCode: "",
};

const onSubmit = (values: FormValues) => {
  // Handle form submission logic here
  console.log(values);
};

const Page2Clone2: React.FC<{
  onSubmit: () => void;
  onPrevStep: () => void;
}> = ({ onSubmit, onPrevStep }) => {
  return (
    <div className="max-w-md mx-auto mt-8">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2>Address Information</h2>
          <div className="mb-4">
            <label
              htmlFor="streetAddress"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Street Address
            </label>
            <Field
              type="text"
              id="streetAddress"
              name="streetAddress"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your street address"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="city"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              City
            </label>
            <Field
              type="text"
              id="city"
              name="city"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your city"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="state"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              State
            </label>
            <Field
              type="text"
              id="state"
              name="state"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your state"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="zipCode"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Zip Code
            </label>
            <Field
              type="text"
              id="zipCode"
              name="zipCode"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your zip code"
            />
          </div>
          <button
            type="submit"
            onClick={() => {
              onSubmit;
            }}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={onPrevStep} // This will go back to the previous step
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Previous
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Page2Clone2;
