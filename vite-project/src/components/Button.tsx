interface Props {
  handleClick: () => void;
  label: string;
}

const Button = ({ handleClick, label }: Props) => {
  return (
    <button className="m-3" onClick={handleClick}>
      {label}
    </button>
  );
};

export default Button;
