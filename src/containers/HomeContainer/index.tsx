import { Card, Heading1 } from '../../components'

const HomeContainer = () => {
  return (
    <Card border={false}>
      <Card border>
        <Heading1 title={'Welcome!'} />
        <div className="flex flex-row justify-around mt-4">
          <Card border>
            <p className=" font-bold text-yellow-400">Week-11</p>
          </Card>
          <Card border>
            <p className="font-bold text-green-500">Week-10</p>
          </Card>
          <Card border>
            <p className="font-bold text-red-600">Week-9</p>
          </Card>
        </div>
      </Card>
    </Card>
  )
}

export default HomeContainer
