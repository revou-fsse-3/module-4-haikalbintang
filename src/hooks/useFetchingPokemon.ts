import { useCallback, useEffect, useState } from 'react'

export interface PokemonData {
  name: string
}

export interface ResponseData {
  results: PokemonData[]
}

interface Props {
  enabled: boolean
}

const useFetchingPokemon = ({ enabled }: Props) => {
  const [pokemons, setPokemons] = useState<PokemonData[]>([])

  const fetchingPokemon = useCallback(async () => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/`)
    const data: ResponseData = await response.json()
    const result = data.results
    setPokemons(result)
  }, [])

  useEffect(() => {
    if (enabled) {
      fetchingPokemon()
    }
  }, [fetchingPokemon, enabled])

  return {
    data: pokemons,
    fetchingPokemon,
  }
}

export default useFetchingPokemon
