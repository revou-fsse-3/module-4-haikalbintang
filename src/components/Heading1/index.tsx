interface Props {
  title: string
}

const Heading1 = ({ title }: Props) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <h1
        style={{
          fontSize: '32px',
          marginBottom: '15px',
        }}
      >
        {title}
      </h1>
    </div>
  )
}

export default Heading1
