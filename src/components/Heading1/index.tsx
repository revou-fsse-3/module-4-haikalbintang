interface Props {
  title: string
}

const Heading1 = ({ title }: Props) => {
  return (
    <h1
      style={{
        fontSize: '32px',
        marginBottom: '15px',
      }}
    >
      {title}
    </h1>
  )
}

export default Heading1
