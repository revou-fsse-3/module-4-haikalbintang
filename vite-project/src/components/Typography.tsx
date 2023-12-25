interface Props {
  children: string;
}

const Typography = ({ children }: Props) => {
  return <p>{children}</p>;
};

export default Typography;
