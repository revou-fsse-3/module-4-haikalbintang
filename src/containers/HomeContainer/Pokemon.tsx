// import { useMemo } from 'react'

// interface Props {
//   pokemons: PokemonData[]
// }

// interface PokemonData {
//   name: string
// }

// const Pokemon = ({ pokemons }: Props) => {
//   const filteredPokemon = useMemo(() => {
//     return pokemons.filter((pokemon) => pokemon.name !== 'bulbasaur')
//   }, [pokemons])

//   return (
//     <ul>
//       {filteredPokemon.map((pokemon, index) => (
//         <li key={index}>{pokemon.name}</li>
//       ))}
//     </ul>
//   )
// }

// export default Pokemon
