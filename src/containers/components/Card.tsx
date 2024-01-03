import { ReactNode } from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const Card = ({ children, ...props }: Props) => {
  return (
    <div className={`card leading-10 border-2 ${props.className} `}>
      {children}
    </div>
  );
};

export default Card;
