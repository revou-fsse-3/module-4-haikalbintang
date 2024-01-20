interface Props {
  currentPage: number;
  totalPage: number
}

const Page = ({ currentPage, totalPage }: Props) => {
  return <div className="absolute top-2 right-3">{currentPage}/{totalPage}</div>;
};

export default Page;
