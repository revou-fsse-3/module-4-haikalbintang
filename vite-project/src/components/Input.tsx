interface Props {
  variant: "single" | "multiple";
  type: "text" | "number" | "email";
}

const Input = ({ variant, type }: Props) => {
  if (variant === "multiple" && type === "text") return <textarea></textarea>;
  return (
    <>
      <input type={type} />
    </>
  );
};

export default Input;
