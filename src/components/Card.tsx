import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Card = ({ children }: Props) => {
  return <div className="card leading-10">{children}</div>;
};

export default Card;
