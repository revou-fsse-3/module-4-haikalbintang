interface Props {
  currentPage: number
  totalPage: number
}

const Page = ({ currentPage, totalPage }: Props) => {
  return (
    <div className="absolute top-0 right-0">
      {currentPage}/{totalPage}
    </div>
  )
}

export default Page
