interface Props {
  variant?: "single" | "multiple";
  type?: "text" | "number" | "email";
  value?: string;
  onChange: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const Input = ({ variant, type, value, onChange }: Props) => {
  const handleOnChange = (
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    onChange(event.target.value);
  };

  if (variant === "multiple" && type === "text")
    return <textarea defaultValue={value} onBlur={handleOnChange}></textarea>;

  return (
    <>
      <input type={type} defaultValue={value} onBlur={handleOnChange} />
    </>
  );
};

export default Input;
