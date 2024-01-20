// import { useContext } from 'react'
// import { Button, Card } from '../../components'
// import { User, AppContext } from '../../providers/ContextProvider'
// import UserDetail from './UserDetail'

// const UserContainer = () => {
//   const { setUser } = useContext(AppContext)

//   const fetchUser = async () => {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users/1')
//     const data: User = await response.json()

//     setUser?.(data)
//   }

//   return (
//     <Card border>
//       <UserDetail />
//       <Button label={'ambil user'} onClick={() => fetchUser()} />
//     </Card>
//   )
// }

// export default UserContainer
