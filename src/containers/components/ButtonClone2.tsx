import React from "react";

const ButtonClone2: React.FC = () => {
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (_event) => {
    // Handle the click event here
    // You can access event.currentTarget to get the button element
    // You may also access other properties of your FormValues
    // For example: const { firstName, email, dob } = someFormValues;
  };

  return <button onClick={handleClick}>Click me</button>;
};

export default ButtonClone2;
