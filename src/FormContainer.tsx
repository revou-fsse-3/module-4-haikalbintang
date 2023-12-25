import { useState } from "react";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import Button from "./components/Button";
import Card from "./components/Card";

const FormContainer = () => {
  const [page, setPage] = useState(1);

  let leftButton = "Previous";

  let rightButton = "Next";

  if (page === 3) rightButton = "Submit";

  const handleNext = () => {
    if (page === 3) return;
    setPage((prevState) => prevState + 1);
  };

  const handlePrevious = () => {
    if (page === 1) {
      return;
    }
    setPage((prevState) => prevState - 1);
  };

  return (
    <>
      <Card>
        {page === 1 && <Page1 />}
        {page === 2 && <Page2 />}
        {page === 3 && <Page3 />}
      </Card>
      <>
        <Button handleClick={handlePrevious} label={leftButton} />
        <Button handleClick={handleNext} label={rightButton} />
      </>
    </>
  );
};

export default FormContainer;
