// import { useState } from "react";
// import Button from "./components/Button";
// import Card from "./components/Card";
// import Page1Clone2 from "./components/Page1Clone2";
// import Page2Clone2 from "./components/Page2Clone2";
// import Page3Clone2 from "./components/Page3Clone2";

// const FormContainer = () => {
//   const [page, setPage] = useState(1);

//   let leftButton = "Previous";

//   let rightButton = "Next";

//   if (page === 3) rightButton = "Submit";

//   const handleNext = () => {
//     if (page === 3) return;
//     setPage((prevState) => prevState + 1);
//   };

//   const handlePrevious = () => {
//     if (page === 1) {
//       return;
//     }
//     setPage((prevState) => prevState - 1);
//   };

//   return (
//     <>
//       <Card>
//         {page === 1 && <Page1Clone2 />}
//         {page === 2 && <Page2Clone2 />}
//         {page === 3 && <Page3Clone2 />}
//       </Card>
//       <>
//         <Button handleClick={handlePrevious} label={leftButton} />
//         <Button handleClick={handleNext} label={rightButton} />
//       </>
//     </>
//   );
// };

// export default FormContainer;
