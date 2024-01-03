import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  handleClick?: () => void;
  label?: string;
  disabled?: boolean;
}

const Button = ({ handleClick, label, disabled, ...props }: Props) => {
  return (
    <button
      {...props}
      className="m-3 mt-8"
      onClick={handleClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
