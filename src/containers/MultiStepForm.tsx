// // MultiStepForm.js
// import React from "react";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";

// const StepOneSchema = Yup.object().shape({
//   // Define validation schema for step one fields
//   firstName: Yup.string().required("First Name is required"),
//   lastName: Yup.string().required("Last Name is required"),
// });

// const StepTwoSchema = Yup.object().shape({
//   // Define validation schema for step two fields
//   email: Yup.string()
//     .email("Invalid email address")
//     .required("Email is required"),
// });

// const StepThreeSchema = Yup.object().shape({
//   // Define validation schema for step three fields
//   password: Yup.string()
//     .min(6, "Password must be at least 6 characters")
//     .required("Password is required"),
// });

// const MultiStepForm = () => {
//   const initialValues = {
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   };

//   const handleSubmit = (values, { setSubmitting }) => {
//     // Handle form submission logic
//     console.log(values);
//     // You can add your submission logic here

//     // Reset form state
//     setSubmitting(false);
//   };

//   return (
//     <Formik
//       initialValues={initialValues}
//       onSubmit={handleSubmit}
//       validationSchema={(values) => {
//         switch (values.step) {
//           case 1:
//             return StepOneSchema;
//           case 2:
//             return StepTwoSchema;
//           case 3:
//             return StepThreeSchema;
//           default:
//             return {};
//         }
//       }}
//     >
//       {({ values, isSubmitting, isValid }) => (
//         <Form className="max-w-xl mx-auto">
//           <div className={values.step === 1 ? "block" : "hidden"}>
//             <div className="mb-4">
//               <label htmlFor="firstName">First Name</label>
//               <Field type="text" id="firstName" name="firstName" />
//               <ErrorMessage
//                 name="firstName"
//                 component="div"
//                 className="text-red-500"
//               />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="lastName">Last Name</label>
//               <Field type="text" id="lastName" name="lastName" />
//               <ErrorMessage
//                 name="lastName"
//                 component="div"
//                 className="text-red-500"
//               />
//             </div>
//           </div>

//           <div className={values.step === 2 ? "block" : "hidden"}>
//             <div className="mb-4">
//               <label htmlFor="email">Email</label>
//               <Field type="email" id="email" name="email" />
//               <ErrorMessage
//                 name="email"
//                 component="div"
//                 className="text-red-500"
//               />
//             </div>
//           </div>

//           <div className={values.step === 3 ? "block" : "hidden"}>
//             <div className="mb-4">
//               <label htmlFor="password">Password</label>
//               <Field type="password" id="password" name="password" />
//               <ErrorMessage
//                 name="password"
//                 component="div"
//                 className="text-red-500"
//               />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="confirmPassword">Confirm Password</label>
//               <Field
//                 type="password"
//                 id="confirmPassword"
//                 name="confirmPassword"
//               />
//               <ErrorMessage
//                 name="confirmPassword"
//                 component="div"
//                 className="text-red-500"
//               />
//             </div>
//           </div>

//           <div className="flex justify-between">
//             {values.step > 1 && (
//               <button
//                 type="button"
//                 onClick={() => setFieldValue("step", values.step - 1)}
//                 className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
//               >
//                 Previous
//               </button>
//             )}

//             {values.step < 3 && (
//               <button
//                 type="button"
//                 onClick={() => setFieldValue("step", values.step + 1)}
//                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//                 disabled={!isValid || isSubmitting}
//               >
//                 Next
//               </button>
//             )}

//             {values.step === 3 && (
//               <button
//                 type="submit"
//                 className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
//                 disabled={!isValid || isSubmitting}
//               >
//                 Submit
//               </button>
//             )}
//           </div>
//         </Form>
//       )}
//     </Formik>
//   );
// };

// export default MultiStepForm;
