import { useState } from 'react'
import { Button, Card, Heading1, Input, Text } from '../../components'
import axios from 'axios'
import { PokemonListContainer } from '..'

const StatsContainer = () => {
  const [pokemonName, setPokemonName] = useState<string>('')
  const [pokemonChosen, setPokemonChosen] = useState(false)
  const [pokemon, setPokemon] = useState({
    name: '',
    species: '',
    type: '',
    img: '',
    hp: '',
    attack: '',
    defense: '',
    list: '',
  })

  const searchPokemon = () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then((response) => {
      setPokemon({
        name: pokemonName,
        species: response.data.species.name,
        type: response.data.types[0].type.name,
        img: response.data.sprites.front_default,
        hp: response.data.stats[0].base_stat,
        attack: response.data.stats[1].base_stat,
        defense: response.data.stats[2].base_stat,
        list: response.data.species.name,
      })
      setPokemonChosen(true)
    })
  }

  return (
    <Card border={false}>
      <Card border>
        <Heading1 title={'Pokemon Stats'} />
        {/* <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8"> */}
        <div className="relative">
          <div className="mt-1 sm:mx-auto sm:w-80 sm:max-w-sm">
            <div className="flex flex-col items-center justify-center">
              <Text className="mb-2">Name</Text>
              <Input
                autoFocus
                id={'pokemonName'}
                type="text"
                className="text-center block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(event) => {
                  setPokemonName(event.target.value)
                }}
              />
              <div className="m-4">
                <Button label={'Search Pokemon'} onClick={searchPokemon} />
              </div>
            </div>
          </div>{' '}
          <div className="flex flex-col items-center justify-center mb-10">
            {!pokemonChosen ? (
              <Text className="text-indigo-950"> Please input one of the Pokemons below in lowercase </Text>
            ) : (
              <>
                {' '}
                <p className="font-semibold text-lg">
                  Species: {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                </p>
                <p className="font-semibold">Type: {pokemon.type.charAt(0).toUpperCase() + pokemon.type.slice(1)}</p>
                <img className=" h-40 w-auto" src={pokemon.img} />
                <p className="font-semibold text-green-600">HP: {pokemon.hp}</p>
                <p className="font-semibold text-red-600">Attack: {pokemon.attack}</p>
                <p className="font-semibold text-blue-700">Defense: {pokemon.defense}</p>
              </>
            )}
          </div>
          <PokemonListContainer />
        </div>
        {/* </div> */}
      </Card>
    </Card>
  )
}

export default StatsContainer
