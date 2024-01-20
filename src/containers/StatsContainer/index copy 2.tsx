// import { useEffect, useState } from 'react'
// import { Button, Card, Input } from '../../components'
// import axios from 'axios'

// interface PokemonList {
//   id: number
//   name: string
// }

// interface Response {
//   pokemons: PokemonList[]
// }

// const StatsContainer = () => {
//   const [pokemonName, setPokemonName] = useState<string>('')
//   const [pokemonChosen, setPokemonChosen] = useState(false)
//   const [pokemon, setPokemon] = useState({
//     name: '',
//     species: '',
//     type: '',
//     img: '',
//     hp: '',
//     attack: '',
//     defense: '',
//     list: '',
//   })
//   const [pokemons, setPokemons] = useState<PokemonList[]>([])

//   const searchPokemon = () => {
//     axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then((response) => {
//       setPokemon({
//         name: pokemonName,
//         species: response.data.species.name,
//         type: response.data.types[0].type.name,
//         img: response.data.sprites.front_default,
//         hp: response.data.stats[0].base_stat,
//         attack: response.data.stats[1].base_stat,
//         defense: response.data.stats[2].base_stat,
//         list: response.data.species.name,
//       })
//       setPokemonChosen(true)
//     })
//   }

//   const pokemonData = async () => {
//     const response = await fetch(`https://pokeapi.co/api/v2/pokemon/`)
//     const data: Response = await response.json()
//     setPokemons(data.pokemons)
//   }

//   const pokemonSubmit = async (form: PokemonList) => {
//     const response = await fetch('https://dummyjson.com/products/add', {
//       headers: {
//         Authorization: localStorage.getItem('token') ?? '',
//       },
//       method: 'POST',
//       body: JSON.stringify({
//         title: form.title,
//         price: form.price,
//       }),
//     })
//     const data: ProductData = await response.json()
//     setProducts([...products, data])
//   }

//   useEffect(() => {
//     pokemonData()
//   }, [])

//   return (
//     <div>
//       <Card border>
//         <Card border>
//           <div
//             style={{
//               display: 'flex',
//               flexDirection: 'column',
//               alignItems: 'center',
//               justifyContent: 'center',
//             }}
//           >
//             <h1
//               style={{
//                 fontSize: '32px',
//                 marginBottom: '15px',
//               }}
//             >
//               Pokemon Stats
//             </h1>
//             <p>Name</p>
//             <Input
//               onChange={(event) => {
//                 setPokemonName(event.target.value)
//               }}
//             />
//             <Button
//               label={'Search Pokemon'}
//               onClick={searchPokemon}
//               style={{
//                 margin: '15px',
//               }}
//             />
//           </div>
//         </Card>
//         <Card
//           border={false}
//           style={{
//             display: 'flex',
//             flexDirection: 'column',
//             gap: '10px',
//           }}
//         >
//           {' '}
//           <div
//             style={{
//               display: 'flex',
//               flexDirection: 'column',
//               alignItems: 'center',
//               justifyContent: 'center',
//             }}
//           >
//             {!pokemonChosen ? (
//               <h1> Please choose a Pokemon </h1>
//             ) : (
//               <>
//                 {' '}
//                 <h2>Species: {pokemon.name}</h2>
//                 <h2>Type: {pokemon.type}</h2>
//                 <img src={pokemon.img} />
//                 <h3>HP: {pokemon.hp}</h3>
//                 <h3>Attack: {pokemon.attack}</h3>
//                 <h3>Defense: {pokemon.defense}</h3>
//               </>
//             )}
//           </div>
//         </Card>
//         <Card border>{pokemons}</Card>
//       </Card>
//     </div>
//   )
// }

// export default StatsContainer
