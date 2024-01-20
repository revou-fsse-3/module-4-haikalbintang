import { Card } from '../../components'
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
    <Card border={false}>
      <Card border>
        <h1
          style={{
            fontSize: '32px',
            marginBottom: '15px',
          }}
        >
          Pokemon List
        </h1>
        <ul>
          {pokemons.map((pokemon, index) => (
            <li key={index}>
              {index + 1}. {pokemon.name}
            </li>
          ))}
        </ul>
      </Card>
    </Card>
  )
}

export default HomeContainer
