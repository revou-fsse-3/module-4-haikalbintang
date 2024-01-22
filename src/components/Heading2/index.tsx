interface Props {
  title: string
}

const Heading2 = ({ title }: Props) => {
  return (
    <div className="flex justify-center">
      <h2
        style={{
          fontSize: '24px',
          marginBottom: '15px',
        }}
      >
        {title}
      </h2>
    </div>
  )
}

export default Heading2
