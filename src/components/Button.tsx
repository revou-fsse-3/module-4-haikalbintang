interface Props {
  handleClick: () => void;
  label: string;
  disabled?: boolean;
}

const Button = ({ handleClick, label, disabled }: Props) => {
  return (
    <button className="m-3" onClick={handleClick} disabled={disabled}>
      {label}
    </button>
  );
};

export default Button;
