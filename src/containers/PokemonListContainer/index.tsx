import { Card, Heading2 } from '../../components'
import { useEffect, useState } from 'react'

interface PokemonData {
  name: string
}

interface ResponseData {
  results: PokemonData[]
}

const HomeContainer = () => {
  const [pokemons, setPokemons] = useState<PokemonData[]>([])

  const fetchingPokemon = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/')
    const data: ResponseData = await response.json()
    const result = data.results
    setPokemons(result)
  }

  useEffect(() => {
    fetchingPokemon()
  }, [])

  return (
    <Card border>
      <Heading2 title={'Pokemon List'} />
      <ul>
        {pokemons.map((pokemon, index) => (
          <li key={index}>
            {index + 1}. {pokemon.name}
          </li>
        ))}
      </ul>
    </Card>
  )
}

export default HomeContainer
