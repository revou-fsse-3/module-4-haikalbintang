import Input from "./Input";

const Page2 = () => {
  return (
    <>
      <h2 className="font-bold text-xl">Address Information</h2>
      <p>Street Address</p>
      <Input variant="single" type="text" />
      <p>City</p>
      <Input variant="single" type="text" />
      <p>State</p>
      <Input variant="single" type="text" />
      <p>Zip Code</p>
      <Input variant="single" type="text" />
    </>
  );
};

export default Page2;
