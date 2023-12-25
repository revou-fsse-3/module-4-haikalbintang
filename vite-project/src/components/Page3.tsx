import Input from "./Input";

const Page3 = () => {
  return (
    <>
      <h2 className="font-bold text-xl">Account Information</h2>
      <p>Username</p>
      <Input variant="single" type="text" />
      <p>Password</p>
      <Input variant="single" type="text" />
    </>
  );
};

export default Page3;
