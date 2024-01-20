// import { Axios } from 'axios'
// import { Button, Card, Input } from '../../components'

// const PokemonSearch = () => {
//   const [pokemonName, setPokemonName] = useState<string>('')
//   const [pokemonChosen, setPokemonChosen] = useState(false)
//   const [pokemon, setPokemon] = useState({})

//   const searchPokemon = () => {
//     Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then((response: any) => {
//       console.log(response)
//     })
//   }

//   return (
//     <Card border>
//       <div
//         style={{
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//           justifyContent: 'center',
//         }}
//       >
//         <h1
//           style={{
//             fontSize: '32px',
//             marginBottom: '15px',
//           }}
//         >
//           Pokemon Stats
//         </h1>
//         <p>Name</p>
//         <Input
//           onChange={(e) => {
//             setPokemonName(e.target.value)
//           }}
//         />
//         <Button
//           label={'Search Pokemon'}
//           onClick={searchPokemon}
//           style={{
//             margin: '15px',
//           }}
//         />
//       </div>
//     </Card>
//   )
// }

// export default PokemonSearch
